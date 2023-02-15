"use strict";
class Human {
    constructor(firstName, lastName, age) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    greeting() {
        console.log(`Привет, я человек и меня зовут ${this._firstName}`);
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
class Employee2 extends Human {
    constructor(firstName, lastName, age, inn, passportNumber, snils) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._passportNumber = passportNumber;
        this._snils = snils;
    }
    greeting() {
        console.log(`Привет, я работник и меня зовут ${this.firstName}`);
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
;
class Developer2 extends Employee2 {
    constructor(firstName, lastName, age, inn, passportNumber, snils, level) {
        super(firstName, lastName, age, inn, passportNumber, snils);
        this._level = level;
    }
    greeting() {
        console.log(`Привет, я разработчик и меня зовут ${this.firstName}`);
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
}
;
const vlad2 = new Developer2('Vlad', 'Gusev', 22, 31231, 2940, 909090, 'intern');
const employee2 = new Employee2('vasya', 'pupkin', 23, 832178, 2940, 908090);
const person = new Human('vlad', 'gusev', 22);
// vlad2.greeting()
// employee2.greeting()
// person.greeting()
const personList = [person, employee2, vlad2];
const massGreeting = function (persons) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
};
massGreeting(personList);
