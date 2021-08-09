const { sections, typesOfEvent } = require("./Enums");

module.exports.EventObj = class EventObj{
    constructor(idOfCar, typeEvent, section, direction, typeCar, day, time, iSpecialDay, FirSection=-1 ){
        
        this.idOfCar = idOfCar;
        this.typeEvent = typeEvent;
        this.section = section;
        this.direction = direction;
        this.typeCar = typeCar;
        this.day = day;
        this.time = time;
        this.iSpecialDay = iSpecialDay;
        this.FirSection = (FirSection !== -1)? FirSection : this.FirSection;
    }

    getCarNumber(){
        return this.idOfCar;
    }
    getEventKind(){
        return this.typeEvent;
    }

    getSection(){
        return this.section;
    }

    getDirection(){
        return this.direction;
    }

    getCarKind(){
        return this.typeCar;
    }

    getDay(){
        return this.day;
    }

    getTime(){
        return this.time;
    }

    getIsSpecialDay(){
        return this.iSpecialDay;
    }

    getFirstSection(){
        return this.FirSection;
    }

    setEventKind(typeEvent){
        this.typeEvent = typeEvent;
    }

    setSection(section){
        this.section = section;
    }
    setTime(time){
        this.time = time;
    }
    
    setDay(day){
        this.day = day;
    }

    toString(){
        return `{"idOfCar":"${this.idOfCar}","typeEvent":"${this.typeEvent}","section":"${this.section}","direction":"${this.direction}","typeCar":"${this.typeCar}","day":"${this.day}","time":"${this.time}","iSpecialDay":"${this.iSpecialDay}","FirSection":"${this.FirSection}"}`;
    }


}
