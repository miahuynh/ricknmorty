const User = require('./userModel');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created student
  createUser(req, res) {
    User.create(req.body, (err, data) => {
      if (err) res.status(418).send(err);
        else res.json(data);
    });
  },

  // Get a student from the database and send it in the response
  // Their first name will be in the request parameter 'name'
  // This should send the found student
  getUser(req, res) {
    console.log(req.params.firstName);
    User.find({firstName: req.params.firstName}, (err, data) => {
      if (err) res.status(418).send(err);
      return res.json(data);
    });
  },

  // Get a user from the database and update the user's name and password
  // The user's first name will be in the request parameter 'name'
  // The user's new first name will be in the request body
  updateUser(req, res) {
    User.updateOne({firstName: req.params.name}, {firstName: req.body.firstName}, (err, data) => {
      if (err) res.status(418).send(err);
      else res.json(data);
    });
    User.updateOne({firstName: req.params.name}, {password: req.body.password}, (err, data) => {
      if (err) res.status(418).send(err);
      else res.json(data);
    });
  },

  // Delete a user from the database
  // The user's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteUser(req, res) {
    User.deleteOne({firstName: req.params.firstName}, (err, data) => {
      if (err) res.status(418).send(err);
      if (!req.params.firstName) res.status(404).send('User does not exist to delete.');
      else res.send('User has been deleted.');
    });
  }
};

module.exports = UserController;
