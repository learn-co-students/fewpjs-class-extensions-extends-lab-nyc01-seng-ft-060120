class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a,b) => a+b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
       let [one, two, three] = this.sides
       let a = one + two > three
       let b = one + three > two
       let c = two + three > one
       return a && b && c
    }
}

class Square extends Polygon {
    get isValid() {
        let [one, two, three, four] = this.sides
        return one === two && one === three && one === four
    }

    get area() {
        let [one, two] = this.sides
        return one * two
    }
}

s = new Square([3,3,3,3])