var admin = require("firebase-admin");

var serviceAccount = require("./settings.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chat-app-f73a1.firebaseio.com"
});

module.exports = admin;