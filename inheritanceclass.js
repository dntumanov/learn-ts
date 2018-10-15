var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User3 = /** @class */ (function () {
    function User3(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User3.prototype.getAge = function () {
        return this.age + '';
    };
    return User3;
}());
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'wfm', job) || this;
        _this.age = 100;
        return _this;
    }
    WFM.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return WFM;
}(User3));
var user4 = new User3('wewe', 'front1'); //создаем объект класса
var wfm = new WFM('back');
console.log(wfm.getAge());
//Абстрактные классы
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getYearCar = function () {
        return this.year;
    };
    return Car;
}());
var Mers = /** @class */ (function (_super) {
    __extends(Mers, _super);
    function Mers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mers.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mers;
}(Car));
var car = new Mers();
console.log(car);
car.logInfo('Info');
console.log(car.getYearCar());
