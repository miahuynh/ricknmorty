const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./userController');



mongoose.connect('mongodb://admin:password123@ds123971.mlab.com:23971/mia-crud-app', () => console.log('hi from server'));

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = express.Router();

//create a user in the datadase
userRouter.post('/', userController.createUser);

//get a student from the database localhost://3000/user/"name"
userRouter.get('/:user', userController.getUser);

// Delete a student from the database
// localhost://3000/student/"name"
userRouter.delete('/:name', userController.deleteUser);


app.use('/user', userRouter);
app.listen(PORT, () =>  console.log(`Hi from ${PORT}`));