class Circle{
    constructor(r){
        this.r=r;
    }
getArea(){
   
    return 3.14*this.r*this.r;
}
getPerimeter(){
  
    return 2*3.14*this.r;
}

}
let circle = new Circle(11);
console.log("area:",circle.getArea());
console.log("perimeter: ",circle.getPerimeter());