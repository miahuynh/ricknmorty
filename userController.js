const User = require('./model');

const UserController = {
  // Create a new student in the Database
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
    User.find({username: req.params.name}, (err, data) => {
      if (err) res.status(418).send(err);
      return res.json(data);
    });
  },

  // Get a student from the database and update the student
  // The student's first name will be in the request parameter 'name'
  // The student's new first name will be in the request body

  // Delete a student from the database
  // The student's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteUser(req, res) {
    User.deleteOne({username: req.params.firstName}, (err, data) => {
      if (err) res.status(418).send(err);
      else res.send('deleted : )');
    });
  }
};

module.exports = UserController;
