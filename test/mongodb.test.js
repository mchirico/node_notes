const { assert, expect } = require("chai");
const { client } = require("../src/mongodb.utils");

describe("Testing MongoDB", () => {
  it("Service Account", function(done) {
    done.timeout = 7000;
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      collection.insertOne(
        {
          name: "Bob",
          age: 12
        },
        (error, result) => {
          if (error) {
            client.close();
            return console.log(error);
            done();
          }
          console.log(result.ops);
          client.close();
          done();
        }
      );
    });
  });
});
