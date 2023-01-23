function setup() {
  let c = createCanvas(450, 600);
}

function draw() {
  background(255, 255, 255);
  let x = 200;
  let y = 300;

  //head

  fill(255, 219, 172);
  ellipse(x, y, 270, y + 30);

  //eyes
  push();
  fill(255, 255, 255);
  ellipse(150, 250, 45, 30);
  ellipse(250, 250, 45, 30);
  pop();

  //pupils
  push();
  fill(0, 0, 255);
  ellipse(150, 250, 20, 15);

  ellipse(250, 250, 20, 15);
  pop();

  //nose

  beginShape();
  vertex(200, 260);
  bezierVertex(215, 320, 235, 320, 190, 320);

  // vertex(185,275);
  // bezierVertex(195,325,205,325,215,275);

  endShape();

  //beard
  push();
  noStroke();
  fill(141, 85, 36);
  beginShape();
  vertex(65, 315);
  bezierVertex(80, 520, 320, 520, 335, 315);
  bezierVertex(260, 445, 135, 445, 65, 315);
  endShape();
  pop();

  //mouth
  fill(255, 255, 255);
  arc(200, 360, 120, 70, 0, PI, CHORD);

  //moustache
  push();
  fill(141, 85, 36);
  noStroke();
  beginShape();
  vertex(120, 345);
  bezierVertex(215, 385, 265, 290, 120, 345);
  endShape();
  pop();

  push();
  fill(141, 85, 36);
  noStroke();
  beginShape();
  vertex(280, 345);
  bezierVertex(195, 385, 145, 290, 280, 345);
  endShape();
  pop();

  //Cap

  push();
  fill(50, 50, 50);
  beginShape();
  vertex(80, 220);
  bezierVertex(115, 100, 285, 100, 320, 220);
  bezierVertex();
  endShape();

  pop();
  push();

  fill(0, 0, 0);
  beginShape();
  vertex(80, 220);
  bezierVertex(165, 200, 250, 200, 320, 220);
  endShape();

  pop();
}
