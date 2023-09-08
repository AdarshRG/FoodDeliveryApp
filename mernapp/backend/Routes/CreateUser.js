const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken")

const bcrypt=require("bcryptjs");
const jwtSecret="Mynameisadarshrg"

router.post(
  "/createuser",                                                    //path creation
  [
    body("email", "invalid email").isEmail(),                       //validation
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);                          //checking any validation in the request
    if (!errors.isEmpty()) {                                       //!if validation any probelm then false and give 400 error
      return res.status(400).json({ errors: errors.array() });
    }

const salt=await bcrypt.genSalt(10)
let secPassword=await bcrypt.hash(req.body.password,salt)          //for secure password


try {
   await User.create({
      name: req.body.name,
      password: secPassword,
      email: req.body.email,
      location: req.body.location,
    })
    .then(res.json({ success: true }));
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "invalid email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email=req.body.email
    try {
      let userData = await User.findOne({email});
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
      if (!pwdCompare) {                  
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
const data={
    user:{
        id:userData.id
    }
}
const authToken=jwt.sign(data,jwtSecret)
      return res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: error.message });
    }
  }
);

module.exports = router;










// try {
//     // Create a new user based on the data in the request body
//     const newUser = await User.create(req.body);                //creates new data on mongo db

//     res.json({ success: true, user: newUser });                 //response will be new data
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, error: error.message });
//   }
// }