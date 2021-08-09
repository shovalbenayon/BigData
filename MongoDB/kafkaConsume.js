// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");
var EventObj = require("./Event");
var EnumObj=require("./Enums")
//var stam=require("./stam")
var mongo=require("./mongoDB");
//var big_ml=require("./bigml1");
const kafkaConf = {
  "group.id": "Road Sections",
  "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "tnkp9jjg",
  "sasl.password": "9iegp3YX5tp4LUx8DvxgYbOfoYeJi08Z",
  "debug": "generic,broker,security"
};

const prefix = "tnkp9jjg-";
const topic = `${prefix}default`;

const topics = [topic];
const consumer = new Kafka.KafkaConsumer(kafkaConf, {
  "auto.offset.reset": "beginning"
});

consumer.on("error", function(err) {
  console.error(err);
});
consumer.on("ready", function(arg) {
  consumer.subscribe(topics);
  consumer.consume();
});


module.exports.subscribe = consumer.on("data", function(m) {
//  console.log( m.value.toString());
  const obj = JSON.parse(m.value.toString());
  let event = new EventObj.EventObj(Number(obj.idOfCar), Number(obj.typeEvent), Number(obj.section), Number(obj.direction), Number(obj.typeCar), Number(obj.day), obj.time, JSON.parse(obj.iSpecialDay), Number(obj.FirSection));
  function check_which_event(event) {
    if(event.typesOfEvent == EnumObj.typesOfEvent.ExRoad){
      try{
        console.log("in if?")
        mongo.InsertData2Mongo(event)
        mongo.OutputFile()
        mongo.update_matrix(event)
      }
      catch{
        console.log("error road exist")
      }
    }
    if(event.typesOfEvent==EnumObj.typesOfEvent.EntRoad){//bigml function predict
      try{
        big_ml.bigi(event)
      }
      catch{
        console.log("error road enter")
      }
    }
 }check_which_event(event); 

consumer.on("disconnected", function(arg) {
  process.exit();
});
console.log(event.toString());
 return event;
 //  console.log(event.toString());
});
consumer.on("disconnected", function(arg) {
  process.exit();
});
consumer.on('event.error', function(err) {
  console.error(err);
  process.exit(1);
});
consumer.on('event.log', function(log) {
  // console.log(log);
});
consumer.connect();
