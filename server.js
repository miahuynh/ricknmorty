const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserController = require('./userController');



mongoose.connect('mongodb://admin:password123@ds123971.mlab.com:23971/mia-crud-app', () => console.log('Hi from Mongoose Server'));

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = express.Router();

//create a user in the datadase
userRouter.post('/', UserController.createUser);

//get a student from the database localhost://3000/user/"name"
userRouter.get('/:firstName', UserController.getUser);

// Change a username's password
// localhost://3000/student/"name"
userRouter.patch('/:firstName', UserController.updateUser);

// Delete a student from the database
// localhost://3000/student/"name"
userRouter.delete('/:firstName', UserController.deleteUser);


app.use('/user', userRouter);
app.listen(PORT, () =>  console.log(`Hi from userRouter ${PORT}`));