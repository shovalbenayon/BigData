const enums = require("./Enums");
var EventObj = require("./Event");
const kafka = require('./kafkaProduce');
const kafkaSubs = require('./kafkaConsume');
class Simulator{

    createEvent(){
        let numDirection = Math.floor(Math.random() * 2) + 1;
        let numTypeCar = Math.floor(Math.random() * 3) + 1;
        let numSection = Math.floor(Math.random() * 5) + 1;
        let numIdCar = Math.floor(Math.random() * 100000);
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let event = new EventObj.EventObj(numIdCar, enums.typesOfEvent.EntRoad, numSection, numDirection, numTypeCar, this.day, time, this.iSpecialDay, numSection);
        this.sendEvent(event.toString());
        setTimeout(() => { this.wayOfCar(event); }, 3000);
    }

    wayOfCar(newEvent){

        switch (newEvent) {
            case newEvent.getTypeCar.Truck:
                this.RouteOfTruckCar(newEvent);

            case newEvent.getTypeCar.Val:
                this.RouteOfValCar(newEvent);

            case newEvent.getTypeCar.Private:
                this.RouteOfPrivateCar(newEvent);
            
            case newEvent.getSection.One && newEvent.getDirection.North:
                this.exitFromRoad(newEvent);

            case newEvent.getSection.Five && newEvent.getDirection.South:
                    this.exitFromRoad(newEvent);
            }
        }

    RouteOfTruckCar(event){
        let raNum =  Math.floor(Math.random() * 10) + 1;
        if(raNum > 1){
            this.nextSection(event);
            setTimeout(() => { this.wayOfCar(event); }, 3000);
        }
        else{
            this.exitFromRoad(event);
        }
    }

    RouteOfPrivateCar(event){
        let raNum =  Math.floor(Math.random() * 10) + 1;
        if(Math.abs(event.getSection - event.getFirstSection()) < 2){
            if(raNum > 1){
                this.nextSection(event);
                setTimeout(() => { this.wayOfCar(event); }, 3000);
            }
            else{
                this.exitFromRoad(event);
            }
        }
        else{
            raNum =  Math.floor(Math.random() * 10) + 1;
            if(raNum <= 3){
                this.nextSection(event);
                setTimeout(() => { this.wayOfCar(event); }, 3000);
            }
            else{
                this.exitFromRoad(event);
            }
        }
        
        
    }

    RouteOfValCar(event){
        let raNum =  Math.floor(Math.random() * 10) + 1;
        if(raNum > 3){
            this.nextSection(event);
            setTimeout(() => { this.wayOfCar(event); }, 3000);
        }
        else{
            this.exitFromRoad(event);
        }
    }

    sendEvent(strEvent){setTimeout(() => { kafka.publish(strEvent); }, 400);}

    nextSection(event){
        event.setTypeEvent(enums.typesOfEvent.ExSection);
        let today = new Date();
        event.setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        this.sendEvent(event.toString());
        let section = (event.getDirection() === enums.directions.South)? event.getSection() + 1 : event.getSection() - 1;
        event.setSection(section);
        event.setTypeEvent(enums.typesOfEvent.EntSection);
        setTimeout(() => {this.sendEvent(event.toString());}, 100);
    }
    exitFromRoad(event){
        event.setTypeEvent(enums.typesOfEvent.ExSection);
        let today = new Date();
        event.setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        this.sendEvent(event.toString());
        event.setTypeEvent(enums.typesOfEvent.ExRoad);
        setTimeout(() => {this.sendEvent(event.toString());}, 100);
    }

    run(){
        this.day = enums.dayInWeek.Sunday;
        this.iSpecialDay = false;
        setInterval(() => {
            this.day = ((this.day + 1) % 7);
            if(this.day === 0)
                this.day = enums.days.Saturday; 
            if(Math.floor(Math.random()*10) === 0)
                this.iSpecialDay = true;
            else
                this.iSpecialDay = false;
        } , 100000);
        setInterval(() => {this.createEvent();}, 10000); 
    }
}

new Simulator().run();
