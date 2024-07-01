const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = 4000;

mongoose.connect('mongodb://localhost:27017/portfoliodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const dataSchema = new mongoose.Schema({
  name: String, 
  emailid: String,
  msg: String,
});

const Data = mongoose.model('Data', dataSchema);

app.use(express.json());
app.use(cors()); 

app.post('./MyComponents/contact', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
