const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;
const Body=Matter.Body;

const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img,polygonObj;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 /* var polygon_options={
  isStatic:true,
  
 }*/
    ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  // second stand
  block17=new Block(640,175,30,40);
  block18=new Block(670,175,30,40);
  block19=new Block(700,175,30,40);
  block20=new Block(670,135,30,40);
  block21=new Block(700,135,30,40);
  block22=new Block(670,95,30,40);
 

  polygon_img=new Polygon(100,100,40);
  slingshot=new SlingShot(polygon_img.body,{x:50,y:200});


  

}
function draw() {
  background(56,44,44); 






 
  textSize(20);
  fill("lightyellow");

 /* imageMode(CENTER);
  image(polygon_img,polygonObj.position.x,polygonObj.position.y,40,40);*/


  
   
  //keyPressed();
  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block18.display();
  block22.display()
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block19.display();
  block21.display();
  fill("grey");
  block16.display();
  stand1.display();
  stand2.display();
  slingshot.display();
  block20.display();
  polygon_img.display();
  
 
}

function mouseDragged(){
Matter.Body.setPosition(polygon_img.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
slingshot.fly();

}
function keyPressed(){
if(keyCode===32){
 
 polygon_img.trajectory=[];
 Matter.Body.setPosition(polygon_img.body,{x:50,y:200});
  slingshot.attach(polygon_img.body);
//mouseReleased();
}


}



