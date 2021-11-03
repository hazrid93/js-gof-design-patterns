
class Rectangle {
    constructor() {
    }

    draw(){
        console.log(`drawing rectangle`);
    }
}

class Circle {
    constructor() {
    }

    draw(){
        console.log(`drawing circle`);
    }
}

function shapeFactory(){
    this.createShape = function (shapeType){
        var shape;
        switch(shapeType){
            case "rectangle":
                shape = new Rectangle();
                break;
            case "circle":
                shape = new Circle();
                break;
            default:
                break;
        }
        return shape;
    }
}

var shapeCreator = new shapeFactory();
var circle = shapeCreator.createShape("circle");
var rectangle = shapeCreator.createShape("rectangle");

rectangle.draw();
circle.draw();