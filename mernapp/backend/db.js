const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/fooddelivery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    const fetch_data = mongoose.connection.db.collection("food_items");
    
    try {
      const data = await fetch_data.find({}).toArray();
      console.log();
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
