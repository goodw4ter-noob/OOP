// Инкапсуляция

class Rectangle {
    private _width;
    private _height;

    constructor(w: number, h: number) {
        this._width = w;
        this._height = h;
    };

    calcArea() {
        return this._height * this._width;
    };

    calcPerimeter() {
        return (this._height + this._width) * 2;
    };

    get width() {
        return this._width;
    };

    set width(value: number) {
        if (value <= 0) this._width = 1;
        this._width = value;
    };
};

const rect = new Rectangle(40, 50);
// console.log(rect.width);

class User {
    private _username;
    private _password;
    private _id;

    constructor(username: string, password: number) {
        this._username = username;
        this._password = password;
        this._id = this._generateRandomId();
    }

    private _generateRandomId() {
        return Math.random() * 10;
    }

    public get username(): string {
        return this._username
    }

    public set username(value: string) {
        this._username = value;
    }

    public get password(): number {
        return this._password;
    }

    public set password(value: number) {
        this.password = value;
    }

    public get id(): number {
        return this._id;
    }
}

const user = new User('Vlad', 123);

// console.log(user.username);

type Table = {
    name: string
}

class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables: Table[];

    constructor (url: string, port: number, username: string, password: string) {
        this._password = password;
        this._port = port;
        this._url = url;
        this._username = username;
        this._tables = [];
    }

    public createNewTable(table: Table) {
        this._tables.push(table);
    }

    public clearTables() {
        this._tables = [];
    }

    public get password() {
        return this._password;
    }

    public get url() {
        return this._url;
    }

    public get username() {
        return this._username;
    }

    public get port() {
        return this._port;
    }

    public get tables() {
        return this._tables;
    }
}

const db = new Database('www', 3000, 'Vlad', '321');

db.createNewTable({name: 'John'});
console.log(db.tables);
