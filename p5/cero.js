function setup() {
  createCanvas(300, 300);
  background(126,42,81);
}

function draw() {
  rectMode(CENTER);
  rect(width/2, height/2, 50, 50);
  triangle(30, 75, 58, 20, 86, 75);
  triangle(30, 75, 58, 120, 86, 75);
  line(mouseX, 0, mouseX, 100);
}
