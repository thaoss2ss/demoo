class Rectangle {
  constructor(x, y, width, height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color =  color;
    this.canvas = document.getElementById('mycanvas');
    this.ctx = this.canvas.getContext('2d');
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}
