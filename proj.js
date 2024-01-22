const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));

mongoose.connect('mongodb://localhost:27017/mypro');

const contactSchema = new mongoose.Schema({
  name: String,
  mno: String,
  gen: String,
  add:String,
  pin: String,
  nat:String,
  breed:String,
  gender:String,
  Color: String,
  pay: String,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/puphome.html");
});
// const Pupto = mongoose.model("Pupto", contactSchema);
app.post("/insert", function (req, res) {
  var Name = req.body.name;
  var Mno = req.body.mno;
  var Gen = req.body.gen;
  var Add = req.body.add;
  var Pin = req.body.pin;
  var Nat=req.body.nat;
  var Breed = req.body.breed;
  var Gender = req.body.gender;
  var Color = req.body.Color;
  var Pay = req.body.pay;
  const Pupto = mongoose.model("Pupto", contactSchema);
  
  const pupto = new Pupto({
    name: Name,
    mno: Mno,
    gen: Gen,
    add: Add,
    pin: Pin,
    nat: Nat,
    breed: Breed,
    gender: Gender,
    color: Color,
    pay: Pay,
    
  });
  pupto.save()
  console.log("success fully saved");
  res.send("Data successfully saved");
});
app.listen(5500);
console.log('Started');
