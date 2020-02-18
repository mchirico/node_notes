const { assert, expect } = require("chai");

const mongoose = require("mongoose");
const { URI } = require("../credentials/mongodb.connect.url");
const { swapUri } = require("../src/swap.utils");
const uri = URI();

describe("Testing Mongoose", () => {
  it("Testing simple mongoose connect", done => {
    mongoose
      .connect(swapUri(uri, "test", "node_notes"), {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      .then(result => {
        console.log("connected... do further tests here..");
        assert.isTrue(true,1)
        done();
        mongoose.disconnect()
      })
      .catch(err => {
        console.log(err);
      });
  });
});
