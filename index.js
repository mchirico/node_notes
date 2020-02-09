const { stations,surburban } = require("./src/utils");

stations(data => {
  console.log(data);
});
surburban(data => {
  console.log(data.north[0]);
});
