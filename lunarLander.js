// #region Background

function moon() {
  angleMode(DEGREES);
  let moonX = 300;
  let moonY = 450;

  fill(229, 229, 220);
  beginShape();
  vertex(moonX - 300, moonY + 100);
  vertex(moonX - 290, moonY + 85);
  vertex(moonX - 275, moonY + 80);
  vertex(moonX - 252, moonY + 61);
  vertex(moonX - 229, moonY + 53);
  vertex(moonX - 211, moonY + 41);
  vertex(moonX - 171, moonY + 31);
  vertex(moonX - 113, moonY + 10);
  vertex(moonX - 61, moonY + 6);
  vertex(moonX + 3, moonY - 1);
  vertex(moonX + 87, moonY + 7);
  vertex(moonX + 116, moonY + 6);
  vertex(moonX + 168, moonY + 21);
  vertex(moonX + 194, moonY + 23);
  vertex(moonX + 219, moonY + 38);
  vertex(moonX + 265, moonY + 52);
  vertex(moonX + 298, moonY + 75);
  ellipse(moonX + 15, moonY + 250, moonX + 500, moonY + 50);
  endShape();

  push();
  translate(moonX - 200, moonY + 140);
  rotate(170);

  fill(200, 200, 193);
  ellipse(0, 0, 100, 70);
  fill(172, 172, 165);

  ellipse(0, 0, 70, 50);
  pop();

  push();
  translate(moonX - 20, moonY + 90);
  rotate(175);
  fill(200, 200, 193);
  ellipse(0, 0, 90, 60);

  fill(172, 172, 165);
  ellipse(0, 0, 60, 40);
  pop();

  push();
  translate(moonX + 250, moonY + 140);
  rotate(10);

  fill(200, 200, 193);
  ellipse(0, 0, 130, 100);

  fill(172, 172, 165);
  ellipse(0, 0, 100, 70);
  pop();

  push();
  translate(moonX - 70, moonY + 30);
  rotate(175);

  fill(200, 200, 193);
  ellipse(0, 0, 70, 30);

  fill(172, 172, 165);
  ellipse(0, 0, 40, 10);
  pop();

  push();
  translate(moonX + 100, moonY + 50);
  rotate(9);

  fill(200, 200, 193);
  ellipse(0, 0, 50, 20);

  fill(172, 172, 165);
  ellipse(0, 0, 25, 10);
  pop();
}

let starX = [];
let starY = [];
let starAlpha = [];

let rocketX = 0;
let rocketY = -100;
let rocketPitch = 0;

let rocketSpeedX = 0;
let rocketSpeedY = 0;

let landingPadX = 300;
let landingPadY = 600;

let screen = "Start";

// The following 21 lines of code was adapted from https://www.youtube.com/watch?time_continue=508&v=kISBKRn-6_I&embeds_euri=https%3A%2F%2Fpixelkind.github.io%2F&feature=emb_title Accessed: 2023-02-11

for (let i = 0; i < 250; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function draw() {
  background(74, 74, 74);
  noStroke();
  moon();

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  //Keyboard up
  if (keyIsDown(38)) {
    rocketSpeedY = rocketSpeedY - 1;
  }

  //Keyboard down
  if (keyIsDown(40)) {
    rocketSpeedY = rocketSpeedY + 1;
  }

  //Keyboard left
  if (keyIsDown(37)) {
    rocketSpeedX = rocketSpeedX - 1;
  }

  //Keyboard right
  if (keyIsDown(39)) {
    rocketSpeedX = rocketSpeedX + 1;
  }

  rocketX = rocketX + rocketSpeedX;
  rocketY = rocketY + rocketSpeedY;

  if (
    mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 200 + 200 &&
    mouseY > 450 &&
    mouseY < 450 + 50 &&
    screen == "Start"
  ) {
    screen = "Game";
  }

  if (screen == "Start") {
    startButton(200, 450, 200, 50);
    howToPlay(100, 100, 400, 100);
  } else if (screen == "Game") {
    drawLandingPad(landingPadX, landingPadY, 0.6);
    drawSpaceShip(rocketX, rocketY, 0.5);
  }

  // drawSpaceShip();
  // drawLandingPad();
}

// #endregion

// #region Landing pad

function drawLandingPad(landingPadX, landingPadY, s) {
  push();
  scale(s);
  noStroke();

  fill(98, 154, 198);
  ellipse(landingPadX, landingPadY + 200, 200, 50);
  ellipse(landingPadX, landingPadY + 210, 200, 50);

  stroke(98, 154, 198);
  line(
    landingPadX - 100,
    landingPadY + 250,
    landingPadX - 98,
    landingPadY + 200
  );
  line(
    landingPadX + 100,
    landingPadY + 250,
    landingPadX + 98,
    landingPadY + 200
  );

  push();
  fill(61, 96, 124);
  ellipse(landingPadX, landingPadY + 200, 150, 30);
  pop();

  push();
  translate(landingPadX - 100, landingPadY + 250);
  angleMode(DEGREES);
  rotate(275);
  angleMode(RADIANS);
  arc(0, 0, 100, 100, 0, QUARTER_PI, PIE);
  pop();

  push();
  translate(landingPadX + 100, landingPadY + 250);
  angleMode(DEGREES);
  rotate(220);
  angleMode(RADIANS);
  arc(0, 0, 100, 100, 0, QUARTER_PI, PIE);
  pop();

  pop();
}

// #endregion

// #region Spaceship

function drawSpaceShip(rocketX, rocketY, s) {
  // The blue body of the spaceship

  push();
  scale(s);

  fill(98, 154, 198);
  push();
  translate(rocketX, rocketY);
  angleMode(RADIANS);
  rotate(HALF_PI);

  beginShape();
  arc(0, 0, 200, 65, 0, PI, PIE);
  rotate(PI);
  arc(0, 0, 200, 65, 0, PI, PIE);
  endShape();
  pop();

  push();
  fill(160, 160, 160);
  ellipse(rocketX, rocketY + 100, 45, 15);
  pop();

  // Base of spaceship
  triangle(
    rocketX - 30,
    rocketY + 100,
    rocketX,
    rocketY + 30,
    rocketX + 30,
    rocketY + 100
  );

  // Arms of spaceship
  triangle(
    rocketX - 50,
    rocketY + 70,
    rocketX - 50,
    rocketY + 110,
    rocketX - 30,
    rocketY + 70
  );
  triangle(
    rocketX + 50,
    rocketY + 70,
    rocketX + 50,
    rocketY + 110,
    rocketX + 30,
    rocketY + 70
  );

  // The window of the spaceship
  stroke(32, 19, 156);
  strokeWeight(4);
  fill(177, 205, 227);
  ellipse(rocketX, rocketY - 40, 40);

  //The shadows on the window
  noFill();
  stroke(255, 255, 255, 50);
  strokeWeight(4);
  curve(
    rocketX - 70,
    rocketY - 100,
    rocketX + 5,
    rocketY - 55,
    rocketX + 10,
    rocketY - 30,
    rocketX,
    rocketY - 30
  );

  // The arms on the ship
  stroke(98, 154, 198);
  strokeWeight(1);
  fill(98, 154, 198);

  push();
  translate(rocketX - 30, rocketY + 50);
  rotate((2 * PI) / 3);
  ellipse(0, 0, 70, 21);
  pop();

  push();
  translate(rocketX + 30, rocketY + 50);
  rotate((2 * PI) / 6);
  ellipse(0, 0, 70, 21);
  pop();

  // The dark blue top of the spaceship
  fill(32, 19, 156);
  stroke(32, 19, 156);
  strokeWeight(2);

  beginShape();
  line(rocketX - 22, rocketY - 70, rocketX + 22, rocketY - 70);
  vertex(rocketX - 23, rocketY - 70);
  bezierVertex(
    rocketX,
    rocketY - 120,
    rocketX,
    rocketY - 120,
    rocketX + 23,
    rocketY - 70
  );
  endShape();

  // The shadows on the spaceship
  noFill();
  stroke(255, 255, 255, 50);
  strokeWeight(5);
  curve(
    rocketX - 50,
    rocketY - 60,
    rocketX + 20,
    rocketY - 60,
    rocketX + 20,
    rocketY + 60,
    rocketX - 10,
    rocketY + 60
  );
  curve(
    rocketX,
    rocketY - 95,
    rocketX + 3,
    rocketY - 100,
    rocketX + 15,
    rocketY - 75,
    rocketX,
    rocketY - 75
  );

  stroke(0, 0, 0, 10);
  strokeWeight(3);
  curve(
    rocketX - 30,
    rocketY + 30,
    rocketX - 30,
    rocketY + 35,
    rocketX - 28,
    rocketY + 60,
    rocketX - 30,
    rocketY + 70
  );
  pop();
}

// #endregion

// #region Start screen

function startButton(x, y, width, height) {
  noStroke();
  fill(61, 96, 124);
  rect(x, y, width, height);

  fill(169, 209, 239);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Start game", x + width / 2, y + height / 2);
}

function howToPlay(x, y, width, height) {
  noStroke();
  fill(255, 255, 255);
  rect(x, y, width, height);

  fill(0, 0, 0);
  textAlign(LEFT);
  text(
    "You are going to land a spaceship on the moon without crashing, you steer the spaceship with the arrow keys. Good luck!",
    110,
    100,
    400,
    100
  );
}

// #endregion
