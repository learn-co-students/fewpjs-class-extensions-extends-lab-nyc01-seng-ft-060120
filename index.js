class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  get countSides() {
    return this.sidesArray.length;
  }

  get perimeter() {
    return this.sidesArray.reduce((a, b) => a + b, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sidesArray)) return;
    if (this.sidesArray.length !== 3) return;

    let side1 = this.sidesArray[0];
    let side2 = this.sidesArray[1];
    let side3 = this.sidesArray[2];

    return (
      side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
    );
  }
}

class Square extends Polygon {
  get area() {
    return this.sidesArray[0] ** 2;
  }

  get isValid() {
    return (
      this.sidesArray.reduce((a, b) => a + b, 0) / this.sidesArray.length ===
        this.sidesArray[0] && this.sidesArray.length === 4
    );
  }
}
