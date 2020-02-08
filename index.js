const request = require("request");
const url = "https://www3.septa.org/hackathon/Arrivals/Suburban%20Station/5/";
const septaExtract = data => {
  for (var key in data) {
    console.log("Key: " + key);
    for (var k in data[key]) {
      console.log(data[key][0]);
    }
    for (var k in data[key]) {
      console.log(data[key][1]);
    }
  }
};

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("\n\n **** error *****\n");
  }
  septaExtract(response.body);
});

module.exports = {
    sayHello: () => {
        return 'hello'
    },
    septaExtract: septaExtract
}
