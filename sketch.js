const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;

var Bob1, Bob2,Bob3, Bob4,Bob5,roof,Rope1, Rope2, Rope3, Rope4, Roof1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	Roof1=new Roof(350, 100, 300, 30)

	BobDiameter=40;

	Bob1=new Bob(350, 300, BobDiameter);
	Bob2=new Bob(400, 300, BobDiameter);
	Bob3=new Bob(450, 300, BobDiameter);
	Bob4=new Bob(500, 300, BobDiameter);
	Bob5=new Bob(550, 300, BobDiameter);

	Rope1=new Rope(Bob1.body, Roof1.body, -BobDiameter*2, 0);
	Rope2=new Rope(Bob2.body, Roof1.body, -BobDiameter*1, 0);
	Rope3=new Rope(Bob3.body, Roof1.body, 0, 0)
	Rope4=new Rope(Bob4.body, Roof1.body, +BobDiameter*1, 0)
	Rope5=new Rope(Bob5.body, Roof1.body, +BobDiameter*2, 0)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	






	
  
}


function draw() {
  
  background(white);
  text("press UP arrow key to move the cradle",100,50);
  Engine.update(engine);
  
	Bob1.display();
	Bob2.display();
	Bob3.display();
	Bob4.display();
	Bob5.display();

	Roof1.display();

	Rope1.display();
	Rope2.display();
	Rope3.display();
	Rope4.display();
	Rope5.display();

	

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyforce(Bob1.body, Bob.body.position,{x:730,y:0 })
	}
}


