//type enum: Перечисления, для задания контсант и для читабельности кода

enum Job {
    front,
    back = 50,
    desine
}

const job: Job = Job.back;

console.log(job);

const job2: Job = Job.desine;
console.log(job2);

//type never: т.к функция не undefined, для таких функциий как ниже, которые возвращают только сообщение
function NewError(err: string): never {
    throw new Error(err);
}

//type null 
let newVar;
newVar = null;
//type null, позволяет обнулить значения
let mynumber: number | null = 20;
mynumber = null;