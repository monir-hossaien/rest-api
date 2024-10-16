
const express = require('express');
const  cors = require('cors')
const usersRoute = require('./routes/users');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(usersRoute);
app.use(cors());


module.exports = app;