class Polygon {
    constructor(array) {
      this.array = array
    }
    get countSides() {
      return this.array.length
    }
    get perimeter() {
      return this.array.reduce((a, b) => a + b)
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) {return false}
      let side1 = this.array[0]
      let side2 = this.array[1]
      let side3 = this.array[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) {return false}
      return this.array[0] * 4 === this.perimeter
    }
    
    get area() {
      if (this.countSides !== 4) {return}
      return this.array[0]**2
    }
  }