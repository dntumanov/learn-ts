//type enum: Перечисления, для задания контсант и для читабельности кода
var Job;
(function (Job) {
    Job[Job["front"] = 0] = "front";
    Job[Job["back"] = 50] = "back";
    Job[Job["desine"] = 51] = "desine";
})(Job || (Job = {}));
var job = Job.back;
console.log(job);
var job2 = Job.desine;
console.log(job2);
//type never: т.к функция не undefined, для таких функциий как ниже, которые возвращают только сообщение
function NewError(err) {
    throw new Error(err);
}
//type null 
var newVar;
newVar = null;
//type null, позволяет обнулить значения
var mynumber = 20;
mynumber = null;
