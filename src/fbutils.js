const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var admin = require("firebase-admin");

var serviceAccount;
try {
  serviceAccount = require("../credentials/tracker-184b3-firebase.json");
} catch (e) {
  if (e.code !== "MODULE_NOT_FOUND") {
    throw e;
  }
  serviceAccount = "notFound";
}

if (serviceAccount != "notFound") {
  if (!admin.apps.length) {
    let app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://tracker-184b3.firebaseio.com"
    });

    var db = app.firestore();
  }
  module.exports = {
    db: db
  };
}
