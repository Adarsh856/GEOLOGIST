const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber, stone, brick ;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(300,200);
    rubber = new Rubber(100,100,50);
    stone = new Stone(500,100, 75, 75);
    brick = new Stone(1000, 100, 125, 50);
}


function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    fill("Green");
    stone.display();
    fill("Red");
    brick.display();
}