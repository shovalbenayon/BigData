const express = require('express')
var async = require("async");
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shoval:sh123456@cluster0.p9ocj.mongodb.net/arieldb?retryWrites=true&w=majority";
const app = express()
const port = 3000



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')


var server = require('http').Server(app);


app.get('/matrix', function (req, res) {
         //  console.log("list: " + data_from_matrix.get_list()+ " end");
            MongoClient.connect(uri,  async function(err, db) {
                if (err) throw err;
                
                var dbo = db.db("arieldb");
                let lst =[];
                var sum_matrix=0
                dbo.collection("DB").findOne({_id : "1"}, {_id : 0 , "matrix.xy" : 1}, function(err, result) {
                    for(var i = 0; i< 25; i++){
                        lst.push(result.matrix[i].v);
                        sum_matrix+=lst[i]
                    }
                        var diagonal=lst[0]+lst[6]+lst[12]+lst[18]+lst[24]
                        
                    console.log(lst + "lst is");
                  db.close();
                  res.render("./pages/matrix.ejs", {object : lst, accuracy : diagonal/sum_matrix});
                  
                });
                
                
              });
            });
       

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})