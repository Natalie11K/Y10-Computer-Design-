function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(255,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(245,113,290);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(310,80,70,70);
  rect(310,350,70,70);
  rect(649,0,50,50);
  rect(0,0,50,50);

  fill(0,255,150);
  rect(100,500/2-50/2,500,50);

  fill(245,113,290)
  rect(0,449,50,50);
  rect(649,449,50,50);


}
