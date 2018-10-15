var User2 = /** @class */ (function () {
    function User2(name, job) {
        this.name = name;
        this.job = job;
    }
    User2.prototype.getAge = function () {
        return this.age;
    };
    User2.prototype.setTitle = function (title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    };
    return User2;
}());
var user3 = new User2('fdfd', 'front');
console.log(user3);
console.log(user3.getAge());
user3.setTitle(false);
