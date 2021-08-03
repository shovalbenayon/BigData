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
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
   
    db.close();
  
  });

});
}
exports.InsertData2Mongo=InsertData2Mongo
/*

function output_file(){
const MongoClient = require('mongodb').MongoClient;

const dbName = 'arieldb';
const client = new MongoClient(uri, { useUnifiedTopology:true });

client.connect(function(err) {
    //assert.equal(null, err);
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    getDocuments(db, function(docs) {
    
        console.log('Closing connection.');
        client.close();
        
        // Write to file
        try {
            fs.writeFileSync('out_file.json', JSON.stringify(docs));
            console.log('Done writing to file.');
        }
        catch(err) {
            console.log('Error writing to file', err)
        }
    });
})

const getDocuments = function(db, callback) {
    const query = { };  // this is your query criteria
    db.collection("test")
      .find(query)
      .toArray(function(err, result) { 
          if (err) throw err; 
          callback(result); 
    }); 
};
}
exports.output_file=output_file


 function update_matrix(event){
    MongoClient.connect(uri, function(err, db) {
      if (err) throw err;
      var dbo = db.db("arieldb");
    // debugger;
     var index="" + event.section + "-" + event.prediction
     
      var myquery = { _id: "1" , "matrix.xy": index };
      var newvalues = { $inc : { "matrix.$.v" : 1  } };
     dbo.collection("test3").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("matrix updated " + index);
        db.close();
      });
    });
  }

  //exports.update_matrix=update_matrix
});

  */