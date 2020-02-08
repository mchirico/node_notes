const assert = require("chai").assert;
const { SuburbanStation } = require("../test_fixtures/testData");
const { septaExtract, sayHello } = require("../index");

describe("Index", () => {
  it("Hello test", () => {
    assert.equal(sayHello(), "hello");
  });

  it("Test Extract"),
    () => {
      septaExtract(SuburbanStation);
    };
});
