const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mongoose = require('mongoose');



mongoose.connect('mongodb://admin:password123@ds123971.mlab.com:23971/mia-crud-app', () => console.log('hi from server'));

app.use(express.static(path.join(__dirname, "dist")));



app.listen(PORT, () =>  console.log('Hi'));