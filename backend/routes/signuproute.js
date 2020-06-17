const express = require("express");
const router = express.Router();
const User = require("../models/signupschema");
const mongoose=require('mongoose');
router.get("/", (req, res) => {
  User.find()
  .then(users => res.json(users));
});
router.post("/", (req, res) => {
  const newuser=new User({
   name:req.body.name,
   email:req.body.email,
   password:req.body.password
  });
  newuser.save().then(user=>res.json(user));
  
});
module.exports=router;
