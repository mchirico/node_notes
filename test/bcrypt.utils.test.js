const { assert, expect } = require("chai");
const { Bcrypt } = require("../src/bcrypt.utils");

describe("Testing bcrypt", () => {
  it("Test bcrypt", () => {
    const b = new Bcrypt(13, "passWord");
    assert.isTrue(b.check("passWord", b.hash));
  });
});
