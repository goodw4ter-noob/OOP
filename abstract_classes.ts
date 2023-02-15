//Интерфейсы - в нем описываются некоторые методы и свойства, их параметры и то, что они возвращают, но при этом в них нет реализации. Они говорят, что нужно сделать, но не говорят как это можно сделать. Из интерфейса нельзя сделать объект. Мы можем имплементировать неограниченное количество интерфейсов в класс

//Абстрактный класс - в них также можно создавать методы, однако здесь можно добавлять реализацию. Класс, который является наследником от абстрактного класса будет иметь все эти методы, а также должен будет реализовывать абстрактные методы

class User1 {
    username: string | undefined;
    age: number | undefined;
}

interface Repository<T> {
    create: (obj: T) => T;
    recieve: () => T;
    update: (obj: T) => T;
    delete: (obj: T) => T;
};

class UserRepo implements Repository<User1> {
    create(obj: User1): User1 {
        return {
            username: '',
            age: 0
        };
    };

    recieve(): User1 {
        return {
            username: '',
            age: 0
        };
    };

    update(): User1 {
        return {
            username: '',
            age: 0
        };
    };

    delete(): User1 {
        return {
            username: '',
            age: 0
        };
    };
}