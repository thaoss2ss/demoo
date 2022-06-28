class myCircle{
  constructor(radius, color){
    this.radius = radius;
    this.color = color;
  }
  getRadius(){
    return this.radius;
  }
  getColor(){
    return this.color;
  }
  getArea(){
    return Math.PI* this.radius * this.radius;
  }
}
let circle = new myCircle(5,"red");
document.write("Hình tròn bán kính là : "+ circle.getRadius());
document.write("<br>");
document.write("Màu của hình tròn : "+ circle.getColor());
document.write("<br>");
document.write("Diện tích hình tròn : "+ circle.getArea());
