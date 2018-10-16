// function getter(data: any){
//     return data;
// }


//generic - обозначение типов  в общем виде
function genericGetter<T>(data: T): T {
    return data;
    
}
let newGenericFunction: <T>(data: T) => T = genericGetter

console.log(genericGetter<string>('wfm').toUpperCase());//здесь мы сами поределяем, что заносим в компилятор 
console.log(genericGetter(100)); //в соответвии с тем, что передаем функции число, заменяет  Т на number. Т.е компилятор определяет за тип данных

//---------------------------------------------------------

class Multiply<T> {
    constructor(private a: T, private b: T) {}
    
    public getResult(): number {
        return Number(this.a) * Number(this.b);
    }
}

const mNum = new Multiply(10,5); 
console.log('Number', mNum.getResult());

const mStr = new Multiply('10','5'); 
console.log('String', mStr.getResult());
