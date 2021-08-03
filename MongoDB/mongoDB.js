var MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const { json } = require('body-parser');
var Enums = require("./Enums");
const event = require("./kafkaConsume");
//var data=require("./data")
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const url = "mongodb+srv://shoval:sh123456@cluster0.p9ocj.mongodb.net/arieldb?retryWrites=true&w=majority";
idx=0;


function InsertData2Mongo(event){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("arieldb");
  var myobj = { idOfCar: event.idOfCar, typeEvent: event.typeEvent , direction: event.direction , typeCar: event.typeCar , day: event.day , time: event.time, iSpecialDay: event.iSpecialDay,FirSection: event.FirSection, section: event.section};
  console.log("document "+ idx + "  insert to database")
  idx++;
  dbo.collection("DB").insertOne(myobj, function(err, res) {
    if (err) throw err;
   
    db.close();
  
  });

});
}
exports.InsertData2Mongo=InsertData2Mongo
