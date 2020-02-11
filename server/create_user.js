module.exports = function create_user() {
  const app = require('./index');
  const Chatkit = require('@pusher/chatkit-server');

  const chatkit = new Chatkit.default({
    instanceLocator: process.env['INSTANCE_LOCATOR'],
    key: process.env['SECRET_KEY'],
  })

  app.post('/users/create', (req, res) => {
    const { username } = req.body
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(() => res.send(201))
      .catch(error => {
        if (error.error === 'services/chatkit/user_already_exists') {
          console.log('Users already exist!')
          res.send(error)
        } else {
          res.status(error.status).json(error)
        }
      })
  })

  app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
  })
}
