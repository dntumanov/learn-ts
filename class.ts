class User2 {
    public name: string; //public данное поле будет доступно, как у наследников  в классе, так в самом классе, так и у экземпляров класса
    private isTeacher: boolean;//private доступно только внутри класса
    protected age: number// protected могут использовать только наследники
    public job: string

    constructor(name: string, job: string) {
        this.name = name;
        this.job = job;
    }

    getAge(): number { //методы могут быть также различного типа(private, protected, public)
        return this.age
    }

    public setTitle(title: boolean) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    }
 }

 const user3 = new User2('fdfd', 'front'); //создаем объект класса
 console.log(user3);
 console.log(user3.getAge());
 user3.setTitle(false);
