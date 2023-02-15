class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor (firstName: string, lastName: string, age: number) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    public get firstName() {
        return this._firstName
    }

    public get lastName() {
        return this._lastName
    }

    public get age() {
        return this._age
    }

    public set firstName(value: string) {
        this._firstName = value
    }

    public set lastName(value: string) {
        this._lastName = value
    }

    public set age(value: number) {
        if (value <= 0) this._age = 0;
        this._age = value
    }
};

class Employee extends Person {
    private _inn;
    private _passportNumber;
    private _snils;

    constructor (firstName: string, lastName: string, age: number, inn: number, passportNumber: number, snils: number) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._passportNumber = passportNumber;
        this._snils = snils;
    }

    public get inn() {
        return this._inn;
    }
    public set inn(value) {
        this._inn = value;
    }

    public get passportNumber() {
        return this._passportNumber;
    }

    public set passportNumber(value) {
        this._passportNumber = value;
    }

    public get snils() {
        return this._snils;
    }

    public set snils(value) {
        this._snils = value;
    }
}

const employee = new Employee('vasya', 'pupkin', 23, 832178, 2940, 908090);
employee.inn = 23;


class Developer extends Employee{
    private _level;

    constructor(firstName: string, lastName: string, age: number, inn: number, passportNumber: number, snils: number, level: string) {
        super(firstName, lastName, age, inn, passportNumber, snils)
        this._level = level;
    }

    public get level() {
        return this._level;
    }

    public set level(value) {
        this._level = value;
    }
};

const vlad = new Developer('Vlad', 'Gusev', 22, 31231, 2940, 909090, 'intern');

console.log(vlad.fullName);

