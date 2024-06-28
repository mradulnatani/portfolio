const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfoliodb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define data schema
const dataSchema = new mongoose.Schema({
  name: 'string',
  emailid: 'string',
  msg: 'string'
});

// Create Data model
const Data = mongoose.model('Data', dataSchema);

app.use(express.json());

// Handle POST requests
app.post(/*'/MyComponents/contact'*/'/', async (req, res) => {
  try {
    const data = new Data(req.body);
    const result = await data.save();
    console.log('Saved data:', result);
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
