//creating a variable called "b1":
//stands for "botton 1"
var b1;

function setup()
{
	createCanvas(500,500);

	//initializing the button 1 with
	//x,y,length, height values
	b1 = new Button(10,10,100,25);
	b1.setText("Natalie");
	b1.setTextOver("VSA");
	b1.setButtonOverFill(249,56,249);
}

function draw()
{
	background(255,255,255);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("buttonList/buttonList.html","_self");
	}
}
