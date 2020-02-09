const request = require("request");
const CSVtoJSON = require("csvtojson");
const fs = require("fs");
const url = "https://www3.septa.org/hackathon/Arrivals/Suburban%20Station/5/";
const septaExtract = (data, callback) => {
  let station = {
    timeStamp: "",
    north: [],
    south: []
  };

  for (var key in data) {
    station.timeStamp = key;
    for (var k in data[key]) {
      station.north.push(data[key][0].Northbound[0]);
    }
    for (var k in data[key]) {
      station.south.push(data[key][1].Southbound[0]);
    }
  }
  callback(station);
};

const surburban = callback => {
  const url = "https://www3.septa.org/hackathon/Arrivals/Suburban%20Station/5/";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("\n\n **** error *****\n");
    }

    septaExtract(response.body, data => {
      callback(data);
    });
  });
};

const stations = callback => {
  const url = "http://www3.septa.org/hackathon/Arrivals/station_id_name.csv";
  request({ url: url, json: false }, (error, response) => {
    if (error) {
      console.log("\n\n **** error *****\n");
    }

    callback(response.body);
  });
};

const writeStations = (file, data) => {
  fs.writeFile(`data/${file}`, data, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

const getURLs = (file, data) => {
  CSVtoJSON()
    .fromFile(file)
    .then(source => {
      data(source);
    });
};

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       console.log("\n\n **** error *****\n");
//     }
//     septaExtract(response.body, data => {
//       console.log(data);
//       callback(data)
//     });
//   });

module.exports = {
  sayHello: () => {
    return "hello";
  },
  septaExtract: septaExtract,
  stations: stations,
  writeStations: writeStations,
  getURLs: getURLs,
  surburban: surburban
};
