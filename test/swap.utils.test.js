const { assert, expect } = require("chai");
const { swapUri } = require("../src/swap.utils");

describe("Testing Swap", () => {
  it("Test swap", () => {
    const result = swapUri("test.more", "test", "box");
    assert.equal(result, "box.more");
  });
});
