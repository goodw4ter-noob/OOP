class Database1 { 
    url!: number; //definite assignment assertion - точное утверждение о присвоении, говорит тайпскрипту, что url ТОЧНО НЕ БУДЕТ undefined
    private static instance: Database1; //к свойству static можно обращаться без создания экземпляра класса
//нужно удостовериться в том, что из этого класса будет создан только один объект базы данных
    constructor() {
        if (Database1.instance) {
            return Database1.instance;
        }
        this.url = Math.random();
        Database1.instance = this;
    }

};

const db1 = new Database1();
const db2 = new Database1();

console.log(db1);
console.log(db2);
