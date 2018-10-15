class User3 {
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(public name: string, public job: string) {

    }

    public getAge(): string {
        return this.age + '';
    }
}

class WFM extends User3 {
    constructor(job: string){
        super('wfm', job);
        this.age = 100;
    }
    
    getAge(): string {
        return 'Hello ' + this.age;
    }
}
const user4 = new User3('wewe', 'front1');//создаем объект класса
const wfm = new WFM('back');
console.log(wfm.getAge());


//Абстрактные классы

abstract class Car {
    model: string;
    year: number = 2010;

    abstract logInfo(info: string): void; //void из-за того, что используем abstract-метод 

    getYearCar(): number {
        return this.year;
    }
}

class Mers extends Car {
    logInfo(info: string): void{
        console.log(info);
    }
}

const car = new Mers();
console.log(car)
car.logInfo('Info');
console.log(car.getYearCar())