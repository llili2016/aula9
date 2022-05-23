var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if (keyIsDouwn(RIGHT_ARROW))
  {
    box.position.x = box.position.x +5;

  }
  if (keyIsDouwn(LEFT_ARROW))
  {
    box.position.x = box.position.x -5;

  }
  if (keyIsDouwn(UP_ARROW))
  {
    box.position.Y = box.position.Y -5;

  } if (keyIsDouwn(DOWN_ARROW))
  {
    box.position.Y = box.position.Y +5;

  }
  drawSprites();
}




