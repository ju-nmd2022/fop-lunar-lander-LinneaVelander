let starX = [];
let starY = [];
let starAlpha = [];

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

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  startButton(200, 450, 200, 50);
  howToPlay(100, 100, 400, 100);
}

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
