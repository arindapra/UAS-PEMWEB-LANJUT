const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch(err => console.error('MongoDB connection error:', err));
