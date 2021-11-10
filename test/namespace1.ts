namespace Test1 {
    export interface Person {
        name: string;
        age: number;
    }
}

function greet(person: Test1.Person){
    return "Hello " + person.name;
}

const greeting = greet({name: "ali", age: 27});
console.log(greeting);