"use strict";
class Engine {
    drive() {
        console.log('Двигатель работает!');
    }
}
;
class Wheel {
    drive() {
        console.log('Колеса крутятся!');
    }
}
;
class Freshener {
}
class Car {
    constructor(freshener) {
        this.wheels = [];
        //Агрегация - если мы удалим класс Car, это никак не скажется на классе Freshener
        this.freshener = freshener;
        //Композиция
        this.engine = new Engine();
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }
    //делегирование
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }
}
;
const bmw = new Car(new Freshener());
bmw.drive();
