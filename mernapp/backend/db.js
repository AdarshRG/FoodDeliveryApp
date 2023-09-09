const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/fooddelivery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    try {
      const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
      global.food_items = fetched_data;
      const foodCategory= await mongoose.connection.db.collection("food_category").find({}).toArray();
      global.food_category = foodCategory;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  });

const express = require("express");
const router = express.Router();

router.post("/foodData",(req, res) => {
    try {
        if (global.food_items && global.food_category) {
            res.send([global.food_items, global.food_category]);
        } else {
            res.send("Data not available");
        }
    } catch (error) {
        console.log(error.message);
        res.send("Server Error");
    }
});

module.exports = router; 















  //   const fetch_data = mongoose.connection.db.collection("food_items");
    
  //   try {
  //     const data = await fetch_data.find({}).toArray();
  //     global.food_items = data; 
  //     // console.log( global.food_items); 
  //   } catch (error) {
  //     console.error('Failed to fetch data:', error);
  //   }
  // })
  // .catch((err) => {
  //   console.error('Failed to connect to MongoDB:', err);
  // });
