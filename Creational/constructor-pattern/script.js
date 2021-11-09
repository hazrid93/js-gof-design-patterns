var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        console.log("person name is :  " + this.name);
    };
    return Person;
}());
var human = new Person('Ali', 18);
human.getName();
