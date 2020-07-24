// Your code here

class Polygon {
    constructor (sides) {
    this.sides = sides;

    }
    get countSides() {
        return this.sides.length 
    }

    get perimeter() {
        if (!Array.isArray(this.sides)) return;
        let sum = 0 
        for (var theValue of this.sides) {
            sum += theValue
        }
        return sum
    }
} 

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        return ((a + b > c) && (a + c > b) && (b + c > a))
    }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        return (( a == b ) && ( a == c ) && ( a == d ))
    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        let a = this.sides[0]
        return a * a
    }
}

let square = new Polygon([4, 4, 4, 4]);
let triforce = new Triangle([6, 8, 6]);
let bob = new Square([5, 5, 5, 5]);

console.log(square);
console.log(square.countSides);
console.log(square.perimeter);

console.log(triforce);
console.log(triforce.countSides);
console.log(triforce.isValid);

console.log(bob);
console.log(bob.countSides);
console.log(bob.isValid);
console.log(bob.area);



