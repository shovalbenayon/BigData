var Event = require("./Event");
var mongo=require("./mongoDB");
const fs = require('fs');
fs.readFile('DataFileFromMongo.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
})
function functionBigML(event=new Event.EventObj(2,3,5,1,4,1,'07:09:1',false,3)){
  var bigml = require('bigml');
const LocalModel = require("bigml/lib/LocalModel"); 
var source = new bigml.Source();

connection = new bigml.BigML('shovalbb14',
                             'ebf0cee41e0f61d176c2339e4c52c3a3d953c58c', 
                             )
                             var source = new bigml.Source(connection);

source.create('fileOutput.json', function(error, sourceInfo) {
  if (!error && sourceInfo) {
    var dataset = new bigml.Dataset();
    dataset.create(sourceInfo, function(error, datasetInfo) {
      if (!error && datasetInfo) {
        var model = new bigml.Model();
         model.create(datasetInfo, function (error, modelInfo) {
          if (!error && modelInfo) {

          var localModel = new bigml.LocalModel(modelInfo.resource);
        
          localModel.predict({"idOfCar": event.idOfCar, "typeEvent": event.typeEvent,"direction": event.direction,
                 "typeCar": event.typeCar,
                 "day": event.day,
                 "time": event.time,
                 "iSpecialDay": event.iSpecialDay,
                 "FirSection": event.FirSection,
                 },
    
                    );


          }
        });
      }
    });
  }
});

}
functionBigML()
exports.functionBigML=functionBigML

