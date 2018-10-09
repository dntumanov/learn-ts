var myName = 'ewew';
var myAge = 12;
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge() {
    return myAge;
}
console.log(getMyAge());
function getMyAge2(age, prefix) {
    return prefix + age;
}
function consoleLog(str) {
    console.log(str);
}
function sum(num1, num2) {
    return num1 + num2;
}
console.log(getMyAge2(40, 'erere'));
consoleLog('TestString');
console.log(sum(5, 10));
//в TS работа с функциями, как показно ниже, работает по приницпу стрелочный функций в ES6
var testFunc = function () { return 1 + 1; };
var testFunc1 = function () {
    return 1 + 1;
};
var mySum;
mySum = sum;
console.log(mySum(15, 10));
