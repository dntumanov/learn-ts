// function getter(data: any){
//     return data;
// }
//generic - обозначение типов  в общем виде
function genericGetter(data) {
    return data;
}
var newGenericFunction = genericGetter;
console.log(genericGetter('wfm').toUpperCase()); //здесь мы сами поределяем, что заносим в компилятор 
console.log(genericGetter(100)); //в соответвии с тем, что передаем функции число, заменяет  Т на number. Т.е компилятор определяет за тип данных
//---------------------------------------------------------
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return Number(this.a) * Number(this.b);
    };
    return Multiply;
}());
var mNum = new Multiply(10, 5);
console.log('Number', mNum.getResult());
var mStr = new Multiply('10', '5');
console.log('String', mStr.getResult());
