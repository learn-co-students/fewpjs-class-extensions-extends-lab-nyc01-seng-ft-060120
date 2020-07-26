class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function (total, side){
            return total + side
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let max = Math.max(...this.sides);
            let sum = this.sides.reduce(function (total, side){
                return total + side;
            }) - max ;
            if (max < sum) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4){
            return (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3])
        }
        else {return false;}
    }
    get area() {
        return this.sides[0] ** 2;
    }
}