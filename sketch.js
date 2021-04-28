const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
Engine.run(engine);

    ground = new Ground(600,height,1200,20);
    stand1=new Stand(690,350,230,10)
    stand2=new Stand(990,200,180,10)
    box1=new Box(600,320,30,40)
    box2=new Box(630,320,30,40)
    box3=new Box(660,320,30,40)
    box4=new Box(690,320,30,40)
    box5=new Box(720,320,30,40)
    box6=new Box(750,320,30,40)
    box7=new Box(780,320,30,40)
    box8=new Box(630,280,30,40)
    box9=new Box(660,280,30,40)
    box10=new Box(690,280,30,40)
    box11=new Box(720,280,30,40)
    box12=new Box(750,280,30,40)
    box13=new Box(660,240,30,40)
    box14=new Box(690,240,30,40)
    box15=new Box(720,240,30,40)
    box16=new Box(690,200,30,40)
    box17=new Box(930,170,30,40)
    box18=new Box(960,170,30,40)
    box19=new Box(990,170,30,40)
    box20=new Box(1020,170,30,40)
    box21=new Box(1050,170,30,40)
    box22=new Box(960,130,30,40)
    box23=new Box(990,130,30,40)
    box24=new Box(1020,130,30,40)
    box25=new Box(990,90,30,40)
    ball=Bodies.rectangle(100,100,20,20)
    World.add(world,ball)
    rope=new SlingShot(this.ball,{x:100,y:100})
}
function draw(){
    background(0);
    //Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
fill('pink')
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("red")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill('green')
box13.display();
box14.display();
box15.display();
fill('yellow')
box16.display();
fill('pink')
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
fill("red")
box22.display();
box23.display();
box24.display();
fill("yellow")
box25.display();
image(polygon_img,ball.position.x,ball.position.y,40,40)
rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly();
}
function keyPressed(){
    if(keyCode===32) {
        Matter.Body.setPosition(this.ball,{x:100,y:100})
        rope.attach(this.ball)
    }
}