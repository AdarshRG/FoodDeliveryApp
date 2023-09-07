const express=require("express")
const router=express.Router()
const User=require("../models/User")
const { body, validationResult } = require('express-validator');

router.post("/createuser",[
body('email','invalid email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','incorrect password').isLength({ min: 5 })],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Create a new user based on the data in the request body
        const newUser = await User.create(req.body);
  
        res.json({ success: true, user: newUser });
      } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
      }
})

router.post("/loginuser",async(req,res)=>{
        try {
            // Create a new user based on the data in the request body
            const newUser = await User.create(req.body);
      
            res.json({ success: true, user: newUser });
          } catch (error) {
            console.error(error);
            res.json({ success: false, error: error.message });
          }
    })

module.exports=router; 