//Carter Lambo
// 02/15/2023
//Lab exercise


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseY < 100){
    scale(1.1);
  } else if (mouseY >= 100 && mouseY < 200) {
    scale(1.2);
  } else if (mouseY >= 200 && mouseY < 300){
    scale(1.3);
  } else {
    scale(1.4);
  }
  
  noStroke();
  fill("white")
  ellipse(100, 100, 50)
  fill("pink")
  ellipse(150, 100, 50)
  fill("tan")
  triangle(70, 100, 180, 100, 125, 200)
}
