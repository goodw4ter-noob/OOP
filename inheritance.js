"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
    set age(value) {
        if (value <= 0)
            this._age = 0;
        this._age = value;
    }
}
;
class Employee extends Person {
    constructor(firstName, lastName, age, inn, passportNumber, snils) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._passportNumber = passportNumber;
        this._snils = snils;
    }
    get inn() {
        return this._inn;
    }
    set inn(value) {
        this._inn = value;
    }
    get passportNumber() {
        return this._passportNumber;
    }
    set passportNumber(value) {
        this._passportNumber = value;
    }
    get snils() {
        return this._snils;
    }
    set snils(value) {
        this._snils = value;
    }
}
const employee = new Employee('vasya', 'pupkin', 23, 832178, 2940, 908090);
employee.inn = 23;
class Developer extends Employee {
    constructor(firstName, lastName, age, inn, passportNumber, snils, level) {
        super(firstName, lastName, age, inn, passportNumber, snils);
        this._level = level;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
}
;
const vlad = new Developer('Vlad', 'Gusev', 22, 31231, 2940, 909090, 'intern');
console.log(vlad.fullName);
