"use strict";
// Инкапсуляция
class Rectangle {
    constructor(w, h) {
        this._width = w;
        this._height = h;
    }
    ;
    calcArea() {
        return this._height * this._width;
    }
    ;
    calcPerimeter() {
        return (this._height + this._width) * 2;
    }
    ;
    get width() {
        return this._width;
    }
    ;
    set width(value) {
        if (value <= 0)
            this._width = 1;
        this._width = value;
    }
    ;
}
;
const rect = new Rectangle(40, 50);
// console.log(rect.width);
class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._id = this._generateRandomId();
    }
    _generateRandomId() {
        return Math.random() * 10;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this.password = value;
    }
    get id() {
        return this._id;
    }
}
const user = new User('Vlad', 123);
class Database {
    constructor(url, port, username, password) {
        this._password = password;
        this._port = port;
        this._url = url;
        this._username = username;
        this._tables = [];
    }
    createNewTable(table) {
        this._tables.push(table);
    }
    clearTables() {
        this._tables = [];
    }
    get password() {
        return this._password;
    }
    get url() {
        return this._url;
    }
    get username() {
        return this._username;
    }
    get port() {
        return this._port;
    }
    get tables() {
        return this._tables;
    }
}
const db = new Database('www', 3000, 'Vlad', '321');
db.createNewTable({ name: 'John' });
console.log(db.tables);
