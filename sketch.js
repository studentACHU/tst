
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var g1;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;
var b13;
var b14;
var b15;
var b16;
 var g2;
 var b17;
 var b18;
 var b19;
 var b20;
 var b21;
 var b22;
 var b23;
 var b24;
 var b25; 
var polygon;
var polygon_img;
var slingshot;









function preload (){
    polygon_img=loadImage("polygon.png");
}

function setup (){

    createCanvas(2300, 2600);
	engine = Engine.create();
	world = engine.world;



    g1 = new Ground(650,600,400,25);
    b1 = new B (500,550,50,50);
    b2 = new B (550,550,50,50);
    b3 = new B (600,550,50,50);
    b4 = new B (650,550,50,50);
    b5 = new B (700,550,50,50);
    b6 = new B (750,550,50,50);
    b7 = new B (800,550,50,50);
    b8 = new B (550,500,50,50);
    b9 = new B (600,500,50,50);
    b10 = new B (650,500,50,50);
    b11 = new B (700,500,50,50);
    b12 = new B (750,500,50,50);
    b13 = new B (600,450,50,50);
    b14 = new B (650,450,50,50);
    b15 = new B (700,450,50,50);
    b16 = new B (650,400,50,50);
    g2 = new Ground(1250,400,400,25);
    b17 = new B (1150,350,50,50);
    b18 = new B (1200,350,50,50);
    b19 = new B (1250,350,50,50);
    b20 = new B (1300,350,50,50);
    b21 = new B (1350,350,50,50);
    b22 = new B (1200,300,50,50);
    b23 = new B (1250,300,50,50);
    b24 = new B (1300,300,50,50);
    b25 = new B (1250,250,50,50);
    polygon = Bodies.circle(200,200,20);
    World.add(world,polygon); 


    slingshot = new sling(this.polygon,{x:200,y:200});





}


   




{



}


function draw(){
    background("lightgreen");
    Engine.update(engine);



g1.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
g2.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);


drawSprites();




}
 function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    
    }
    function mouseReleased(){
        slingshot.fly()
    }
    