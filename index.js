class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {return false;}
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {return false;}
    return this.sides[0] * 4 === this.perimeter;
  }
  
  get area() {
    if (this.countSides !== 4) {return}
    return this.sides[0]**2;
  }
}
