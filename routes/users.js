const {homeRoute, createUsers, getUsers, updateUser, deleteUser} = require("../controller/users");
const route = require('express').Router();


route.get('/', homeRoute)
route.get('/users', getUsers)
route.post('/users', createUsers)
route.put('/users/:id', updateUser)
route.delete('/users/:id', deleteUser)





module.exports = route