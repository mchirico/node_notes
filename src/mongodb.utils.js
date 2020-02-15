const MongoClient = require("mongodb").MongoClient;
const { URI } = require("../credentials/mongodb.connect.url");
const uri = URI();
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     collection.insertOne({
//         name: 'Bob',
//         age: 12
//     }, (error, result) => {
//         if (error) {
//             client.close();
//             return console.log(error)
//         }
//         console.log(result.ops)
//         client.close();
//     })
//
//
// });

module.exports = {
  client: client
};
