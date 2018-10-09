const myName: string ='ewew';
const myAge: number = 12;

function getMyName(): string {
    return myName;
}

console.log(getMyName());

function getMyAge(): number {
    return myAge;
}

console.log(getMyAge());

function getMyAge2(age: number, prefix: string): string {
    return prefix + age;
}

function consoleLog(str: string): void { // тип void показывает undefined(ничего не возвращаем)
    console.log(str);
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(getMyAge2(40, 'erere'));
consoleLog('TestString')
console.log(sum(5, 10));
//в TS работа с функциями, как показно ниже, работает по приницпу стрелочный функций в ES6
const testFunc = () => 1 + 1;
const testFunc1 =  function() {
    return 1 + 1;
}
let mySum: (a: number, b: number) => number;
mySum = sum;

console.log(mySum(15 ,10))