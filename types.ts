//типы переменных
//string
let str: string = 'string';
// number
let num: number = 10;

//boolean
let isTrue: boolean =  true;
let isFalse: boolean =  true;

//other

let unknown: any  = '1';
// Поменять тип переменной(any)
unknown = 1;
unknown = true;
//либо |
let unknown_1: string | boolean
unknown_1 = '1';
unknown_1= true;