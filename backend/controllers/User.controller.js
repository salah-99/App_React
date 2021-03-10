const User = require('../models/User.module');
const { response } = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _=require('lodash')



const register = async (req, res) => {

  const emailExist = await User.findOne({ email: req.body.value.email });
  if (emailExist) {
    return res.status(400).send("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.value.password, salt);
    console.log(req.body.value); 
    const{first_Name,last_Name,email} =req.body.value

  const user = new User({
    first_Name,
    last_Name,
    email,
    password:hashPassword
  
  });

  try {
    const savedUser = await user.save();
     res.send(_.pick(savedUser,['_id','first_Name','last_Name','email']));
  } catch (err) {
    res.send(err);
  }
};

const login = async (req, res) => {

  const user = await User.findOne({ email: req.body.value.email });
  if (!user) return res.send("Email  is wrong");

  const validPass = await bcrypt.compare(req.body.value.password, user.password);
  if (!validPass) return res.send("password is wrong");

  const token = jwt.sign({user}, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({user,token});

};

  module.exports={register,login}