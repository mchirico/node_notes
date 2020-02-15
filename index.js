const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000
const jsDirectoryPath = path.join(__dirname, './public/js');
const angularDirectoryPath = path.join(__dirname, './dist');
const chatIndex = path.join(__dirname, './public/chat/chat.html');

app.use("/", express.static(angularDirectoryPath));
app.use("/js", express.static(jsDirectoryPath));


app.get('/chat', function (req, res) {
    res.sendFile(chatIndex);
})

app.get('/example/a', function (req, res) {
    res.send('Hello from A!')
})

let count = 0;
io.on('connection', (socket) => {
    console.log(`New WebSocket`);
    socket.emit('countUpdated', count)

    socket.on('increment', () => {
        count++
        socket.emit('countUpdated', count)
    })
});

server.listen(port, () => {
    console.log(`Server is up: port ${port}`)
    console.log(`Try: http://localhost:3000/example/a`)


})

module.exports = {
    app: app,
    server: server,
}; // for testing

