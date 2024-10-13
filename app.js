const express = require('express');
const usersRoute = require('./routes/users');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(usersRoute);
module.exports = app;