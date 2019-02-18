var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;


}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,400,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,400,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Natalie Kong",30,430);

	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);
  if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
  {
    fill(255,200,0);
    stroke(0,0,0);
    strokeWeight(3);
    rect(10,400,100,50);
  }
  else
  {
    fill(195,185,145);
    stroke(0,0,0);
    strokeWeight(3);
    rect(150,400,100,50);
  }

  fill(255,255,255);
  stroke(0,0,0);
  textSize(12);
  text("Kong",150,430);


  fill(200,200,255);
  stroke(0,0,0);
  rect(button2X,button2Y,100,50);
}

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Options",button2X+50,button2Y+60);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+60,button2Y+50);
	}
