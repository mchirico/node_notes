const { assert, expect } = require("chai");
const { SuburbanStation } = require("../test_fixtures/testData");
const { septaExtract, sayHello, 
    stations, writeStations, getURLs } = require("../src/utils");

describe("Testing Utils", () => {

  it("Hello test", () => {
    assert.equal(sayHello(), "hello");
  });

  it("Test Septa Extract", () => {
    septaExtract(SuburbanStation(), data => {
      assert.equal(data.north[0].train_id, "456");
      assert.equal(data.south[0].direction, "S");
    });
  });

  it("Test Septa Extract", () => {
    septaExtract(SuburbanStation(), data => {
      assert.equal(data.north[0].train_id, "456");
      assert.equal(data.south[0].direction, "S");
    });
  });

  it("Test Stations", () => {
      stations(data => {
          writeStations("stations.csv",data)

      })
    
  });

  it("Get URLs", () => {
      getURLs("data/stations.csv",data => {
        console.log(data)
      });

  
});

});
