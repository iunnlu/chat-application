module.exports = function create_user() {
  const app = require('./index');
  const Chatkit = require('@pusher/chatkit-server');
  const admin = require('./firebase_admin');

  const chatkit = new Chatkit.default({
    instanceLocator: process.env['INSTANCE_LOCATOR'],
    key: process.env['SECRET_KEY'],
  })

  app.post('/users/create', (req, res) => {
    const { username, password, email } = req.body
    admin.auth().createUser({
      uid: username,
      email: email,
      password: password
    })
      .then(function (userRecord) {
        console.log('Successfully created new user:', userRecord.uid);
        chatkit
          .createUser({
            id: username,
            name: username
          })
          .then(() => res.send(201))
          .catch(error => {
            res.send(error)
          })
      })
      .catch(function (error) {
        console.log('Error creating new user:', error);
        res.send(error);
      });

  })
}
