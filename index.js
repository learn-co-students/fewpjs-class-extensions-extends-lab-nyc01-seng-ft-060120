class Polygon {
  constructor(array){
    this.sidesArray = array
  }
  
  get countSides(){
    return this.sidesArray.length
  }
  
  get perimeter(){
    return this.sidesArray.reduce(function(a, b){
        return a + b;
    }, 0);
  }
}

class Triangle extends Polygon{
  
  get isValid(){
    if ((this.sidesArray[0] + this.sidesArray[1]) > this.sidesArray[2]){
      if ((this.sidesArray[2] + this.sidesArray[1]) > this.sidesArray[0]){
        if ((this.sidesArray[0] + this.sidesArray[2]) > this.sidesArray[1]){
          return true;
        }else{return false}
      }else{return false}
    }else{return false}
  }
  
}

class Square extends Polygon{
  
  get isValid(){
    let i;
    let a;
    for (i = 0; i< this.countSides; i++){
      if (this.sidesArray[i] === this.sidesArray[0]){
        a = true
      }else{
        a = false;
        break;
      }
    }
    return a
  }
  
  get area(){
    return this.sidesArray[0] * this.sidesArray[1]
  }
  
  
}