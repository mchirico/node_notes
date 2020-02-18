const path = require("path");
const http = require("http");
const express = require("express");
const graphqlHttp = require("express-graphql");
const socketio = require("socket.io");

const mongoose = require("mongoose");
const { URI } = require("./credentials/mongodb.connect.url");
const uri = URI();
const { addThing } = require("./src/mongoose/mongoose.util");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const graphqlSchema = require("./src/graphql/schema");
const graphqlResolver = require("./src/graphql/resolvers");

const port = process.env.PORT || 3000;
const jsDirectoryPath = path.join(__dirname, "./public/js");
const angularDirectoryPath = path.join(__dirname, "./dist");
const chatIndex = path.join(__dirname, "./public/chat/chat.html");

app.use("/", express.static(angularDirectoryPath));
app.use("/js", express.static(jsDirectoryPath));

app.get("/chat", function(req, res) {
  res.sendFile(chatIndex);
});

app.get("/example/a", function(req, res) {
  addThing(mongoose, req, res, "Works!");
});

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver
  })
);

let count = 0;
io.on("connection", socket => {
  console.log(`New WebSocket`);
  socket.emit("countUpdated", count);

  socket.on("increment", () => {
    count++;
    socket.emit("countUpdated", count);
  });
});

mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    server.listen(port, () => {
      console.log(`🚀 Server is up: port ${port}`);
      console.log(`Try: http://localhost:3000/example/a`);
    });
  })
  .catch(err => {
    console.log(err);
  });

module.exports = {
  app: app,
  server: server
}; // for testing
