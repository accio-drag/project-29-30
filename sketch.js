const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
img1 = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)

    block1 = new Block(300,275,30,40)
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)
    block7 = new Block(490,275,30,40)
    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11= new Block(420,235,30,40)
    block12 = new Block(450,235,30,40)
    block13= new Block(360,195,30,40)
    block14= new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)
    block16= new Block(390,155,30,40)

blox1 = new Block(640,175,30,40)
blox2 = new Block(670,175,30,40)
blox3 = new Block(700,175,30,40)
blox4 = new Block(730,175,30,40)
blox5 = new Block(760,175,30,40)
blox6 = new Block(670,135,30,40)

blox7 = new Block(700,135,30,40)

blox8 = new Block(730,135,30,40)
blox9 = new Block(700,95,30,40)

ball = Bodies.circle(100,200,20)
World.add(world,ball)

slingshot= new Slingshot(ball,{x:200 , y:200 })

 

}
function draw(){

background(56,44,44)
Engine.update(engine);
textSize(20);
 fill("lightyellow");
 text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
ground.display()
stand1.display()
stand2.display()
fill("blue");
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
fill("green");
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
fill("cyan")
block13.display()
block14.display()
block15.display()
fill("red")
block16.display()



blox1.display()
blox2.display()
blox3.display()
blox4.display()
blox5.display()
blox6.display()
blox7.display()
blox8.display()
blox9.display()

imageMode(CENTER)
image(img1,ball.position.x,ball.position.y,40,40)
slingshot.display();














}

function mouseDragged(){
    
    
        Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
       
    }



function mouseReleased(){
    slingshot.fly();
 
}
function keyPressed(){
    if(keyCode === 32){
            
       slingshot.attach(ball);
    }
}
