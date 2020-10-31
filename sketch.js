var b1, a1,c1,d1;

function setup() {
  createCanvas(1200,800);
  b1 = createSprite(400, 200, 50, 80);
  b1.shapeColor = "green";
  b1.debug = false;
  a1= createSprite(200,200,80,30);
  a1.shapeColor = "green";
  a1.debug = false;
  a1.velocityX=4;
  b1.velocityX=-4;
  c1 = createSprite(100,100,70,60);
  d1 = createSprite(100,300,80,20);
  c1.velocityY=4;
  d1.velocityY=-4;

}

function draw() {
  background(0,0,0);  
  
bounceOff(a1,b1);
bounceOff(c1,d1);

 if(touching(a1,b1)){
   a1.shapeColor="yellow";
   b1.shapeColor="yellow";
 }
 else{
   a1.shapeColor="green";
   b1.shapeColor="green";
 }
      

    
 

  
  drawSprites();
}




