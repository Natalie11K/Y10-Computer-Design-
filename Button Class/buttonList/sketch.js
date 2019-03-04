var b1;
var b2;
var b3;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Menu");
	b1.setTextOver("Instructions");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,70,100,25);
	b2.setText("Menu");
	b2.setTextOver("Easy");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,100,100,25);
	b3.setText("Menu");
	b3.setTextOver("Hard");
	b3.setButtonOverFill(255,255,50);

}

function draw()
{
	background(125,125,125);

	b1.showButton();
	b2.showButton();
	b3.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
}
