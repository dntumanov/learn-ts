// interface ILength { //Интерфейс определяет свойства и методы, которые объект должен реализовать(а именно нужные и необязательные поля )
//     length: number;
// }

// function getLength(variable: ILength): void {
//     console.log('getLength', variable.length);

// }

// const box = {
//     name: 'wee',
//     length: 20
// }

// getLength(box);
// getLength([1, 2, 3]);

interface IUser {// т.е в интерфейсах мы описывем только поля(обязательные и нет и по умолчанию), а потом опредялем их для обхектов и для классов, чтобы была общая структура, которая позволяет вести корректный код 
    name: string;
    age?: number;
    logInfo(info: string): void
}

interface IGetYear {
    getYear(): number;
}

class User4  implements IUser, IGetYear{// наследоваться можно от одного класса, а имплемитироваться от нескольких интерфейсов
    name: string = 'user';
    job: string;
    newAge: number;
    logInfo(info: string): void {
        console.log(info);
    }
    getYear():number {
        return 200;
    }
}