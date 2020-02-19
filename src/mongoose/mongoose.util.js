class AddTank {
  constructor(mongoose) {
    const schema = new mongoose.Schema({
      name: "string",
      size: "string",
      ip: "string",
      date: "string"
    });
    this.Tank = mongoose.model("Tank", schema);
  }

  addThing = (req, res, data) => {
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    var date = new Date();

    var small = new this.Tank({ size: data, ip: ip, date: date });

    small.save(function(err) {
      if (err) {
        res.send(`error: ${err}`);
      } else {
        res.send("Hello from A!");
      }
    });
  };
}

module.exports = {
  AddTank: AddTank
};
