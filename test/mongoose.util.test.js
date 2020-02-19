const { assert, expect } = require("chai");

const mongoose = require("mongoose");
const { URI } = require("../credentials/mongodb.connect.url");
const { swapUri } = require("../src/swap.utils");
const uri = URI();

const { PlayGround } = require("../src/mongoose/mongoose.util");

const TesterMongoose = (data, ResultCmd) => {
  mongoose
    .connect(swapUri(uri, "test", "node_notes"), {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(result => {
      console.log("connected... do further tests here..");

      ResultCmd();
    })
    .catch(err => {
      console.log(err);
    });
};

describe("Testing Mongoose", () => {
  it("A better test", function(done) {
    done.timeout = 7000;
    TesterMongoose("Some Data to pass...", () => {
      const playGround = new PlayGround(mongoose);
      playGround.addThing("WOW!... Testing simple mongoose connect", () => {
        console.log("END ready to disconnect.. 2...");

        mongoose.deleteModel("Tank");
        mongoose.disconnect();

        done();
      });
    });
  });

  it("See if it runs a 2nd time...", function(done) {
    done.timeout = 7000;
    TesterMongoose("Some Data to pass...", () => {
      const playGround = new PlayGround(mongoose);
      playGround.addThing("WOW!... Testing simple mongoose connect", () => {
        console.log("END ready to disconnect.. 2...");

        mongoose.deleteModel("Tank");
        mongoose.disconnect();

        done();
      });
    });
  });

});
