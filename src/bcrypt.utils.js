const bcrypt = require("bcrypt");

class Bcrypt {
  constructor(saltRounds = 13, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    this.h = bcrypt.hashSync(password, salt);
  }

  get hash() {
    return this.h;
  }

  check(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = {
  Bcrypt: Bcrypt
};
