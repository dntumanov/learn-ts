// interface ILength { //Интерфейс определяет свойства и методы, которые объект должен реализовать(а именно нужные и необязательные поля )
//     length: number;
// }
var User4 = /** @class */ (function () {
    function User4() {
        this.name = 'user';
    }
    User4.prototype.logInfo = function (info) {
        console.log(info);
    };
    User4.prototype.getYear = function () {
        return 200;
    };
    return User4;
}());
