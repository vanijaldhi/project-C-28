
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(800,650,1600,50);
	 tree = new Tree(1200,425,50,400);
	 stone = new Stone(340,540);
	 boy = new Boy(400,600);
	
	 mango1 = new Mango(1260,130);
	 mango2 = new Mango(1400,200);
	 mango3 = new Mango(1140,300);
	 mango4 = new Mango(1100,200);
	 mango5 = new Mango(1240,260);

	 //sling1 = new SlingShot(stone.body,{x:400,y:600});

	Engine.run(engine);
  
}


function draw() {
  background(150,200,255);
 
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  //ling1.display()

}



