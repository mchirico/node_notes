const addThing = (mongoose, req, res, data) => {
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  var schema = new mongoose.Schema({
    name: "string",
    size: "string",
    ip: "string"
  });
  var Tank = mongoose.model("Tank", schema);
  var small = new Tank({ size: data, ip: ip });

  small.save(function(err) {
    if (err) {
      res.send(`error: ${err}`);
    } else {
      res.send("Hello from A!");
    }
  });
};

module.exports = {
  addThing: addThing
};
