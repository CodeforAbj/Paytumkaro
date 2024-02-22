const express = require("express");
const {alreadyExists} = require('../Middlewares/userchecks');
const userRouter = express.Router();

/*
{
	username: "name@gmail.com",
	firstName: "name",
	lastName: "name",
	password: "123456"
    upiID
    mobNo
    email
}
*/ 
userRouter.post('/signup',(req,res)={
   
})
module.exports = userRouter;
