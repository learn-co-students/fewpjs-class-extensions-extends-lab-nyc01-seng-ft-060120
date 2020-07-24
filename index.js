// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let total = 0
        for (let i = 0; i < this.sides.length; i++) {
            total = total + this.sides[i]
        }
        return total
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]) ? true : false;
    }
}

class Square extends Polygon {
    get isValid() {
        let checkSides = this.sides.filter(side => {
            return side === this.sides[0]
        })
        return (checkSides.length === 4) ? true : false;
    }

    get area() {
        return Math.pow(this.sides[0], 2)
    }
}