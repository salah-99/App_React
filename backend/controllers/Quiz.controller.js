const Quiz = require('../models/Quiz.module');
const mongoose = require('mongoose');
const { response } = require('express');

const GetQuiz= async(req,res,next)=>{
  const Qu = await Quiz.find()   

  try{
      res.json(Qu);
  }catch(err){
     res.json({
         message: "empty Question"
     });
  }
}
const QuizCategory= async(req,res,next)=>{
  let Cat= req.params.cat;
  const QuiC = await Quiz.find({Category:Cat})   

  try{
      res.json(QuiC);
  }catch(err){
     res.json({
         message: "empty Question"
     });
  }
   
  }

  module.exports={QuizCategory,GetQuiz}