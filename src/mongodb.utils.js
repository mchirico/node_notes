const MongoClient = require("mongodb").MongoClient;
const { URI } = require("../credentials/mongodb.connect.url");
const uri = URI();
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = {
  client: client
};
