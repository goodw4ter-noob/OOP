"use strict";
class Database1 {
    //нужно удостовериться в том, что из этого класса будет создан только один объект базы данных
    constructor() {
        if (Database1.instance) {
            return Database1.instance;
        }
        this.url = Math.random();
        Database1.instance = this;
    }
}
;
const db1 = new Database1();
const db2 = new Database1();
console.log(db1);
console.log(db2);
