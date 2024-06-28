const express = require('express');
const mongoose = require('mongoose');
const app = express();
const main = (async()=>{
  await  mongoose.connect('mongodb://localhost:27017/portfoliodb');

})
console.log(main)
const dataSchema = new mongoose.Schema({
    name:'string',
    emailid:'string',
    msg:'string'
})
mongoose.model('Data',dataSchema);
app.use(express.json());

app.post('/MyConponents/contact',async(req,res)=>{
    let data = new Data(req.body);
    let result = await data.save();
})
app.listen(4000);