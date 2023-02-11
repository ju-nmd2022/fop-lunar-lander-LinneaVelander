background(255, 255, 255);

fill(230, 230, 230);
stroke(130, 130, 130);
strokeWeight(5);
ellipse(300, 300, 250, 70);

noStroke();
fill(98, 154, 198);
ellipse(300, 300, 200, 50);

push();
translate(200, 320);
rotate();
arc(0, 0, 50, 50, 0, QUARTER_PI, PIE);
pop();
