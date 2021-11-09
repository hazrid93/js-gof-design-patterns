class Person {
    name: string;
    age: string;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName(){
        console.log(`person name is :  ${this.name}`);
    }
}

const human = new Person('Ali', 18);
human.getName();
