
class Human {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName: string, lastName: string, age: number) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public greeting() {
        console.log(`Привет, я человек и меня зовут ${this._firstName}`);
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

class Employee2 extends Human {
    private _inn;
    private _passportNumber;
    private _snils;

    constructor (firstName: string, lastName: string, age: number, inn: number, passportNumber: number, snils: number) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._passportNumber = passportNumber;
        this._snils = snils;
    }

    public greeting(): void {
        console.log(`Привет, я работник и меня зовут ${this.firstName}`);
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
};

class Developer2 extends Employee2{
    private _level;

    constructor(firstName: string, lastName: string, age: number, inn: number, passportNumber: number, snils: number, level: string) {
        super(firstName, lastName, age, inn, passportNumber, snils)
        this._level = level;
    }

    public greeting(): void {
        console.log(`Привет, я разработчик и меня зовут ${this.firstName}`);
    }

    public get level() {
        return this._level;
    }

    public set level(value) {
        this._level = value;
    }
};

const vlad2 = new Developer2('Vlad', 'Gusev', 22, 31231, 2940, 909090, 'intern');
const employee2 = new Employee2('vasya', 'pupkin', 23, 832178, 2940, 908090);
const person = new Human('vlad', 'gusev', 22);

// vlad2.greeting()
// employee2.greeting()
// person.greeting()

const personList: Human[] = [person, employee2, vlad2];

const massGreeting = function (persons: Human[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
};

massGreeting(personList);