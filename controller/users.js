const path = require("path");
const { v4: uuidv4 } = require('uuid');
let users = require('../module/users')

// home page
exports.homeRoute =(req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
}

// get all users
exports.getUsers =(req, res)=>{
    res.status(200).json({users})
}

// create user
exports.createUsers = (req, res)=>{
    const newUser ={
        id: uuidv4(),
        name: req.body.name,
        designation: req.body.designation
    }

    users.push(newUser)

    res.status(201).json({
        success: true,
        users
    })


}

// update user
exports.updateUser =(req, res)=>{{
    const userId = req.params.id;
    const {name, designation} = req.body;
    users.filter((user)=> user.id === userId).map((selectedUser)=>{
        selectedUser.name = name
        selectedUser.designation = designation
    })
    res.status(200).json({users})
}}

// delete user
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter((user)=> user.id !== id)
    res.status(200).json({
        success: true,
        users
    })
};