var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var preloadflag = 0, setupflag = 0, keypressedflag = 0;
var bottomBox, rightBox, leftBox;
var drawspriteflag = false;
//var width = 10, height = 10;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	console.log("Entered preload");
	preloadflag = 1;
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	console.log("Left preload");
}

function setup() {
	console.log("Entered setup");
	createCanvas(700, 700);
	rectMode(CENTER);
	setupflag = 1;
	console.log("packageSprite.velocityX");
	
	packageSprite=createSprite(width/2, 200, 10,10); 
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityY = 0;
	rightBox=createSprite(200,550,10,200);
	leftBox=createSprite(500,550,10,200);

	bottomBox=createSprite(350,650, 300,30);


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	
/*
	packageSprite = Bodies.circle(	width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageSprite);
*/	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
	console.log("Exit setup()");
}


function draw() {
  	rectMode(CENTER);
  	background(0);

	if (preloadflag === 0) preload();
  	if (setupflag === 0) setup();
//	packageSprite = packageBody;
	//packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y; 
	
	if (keypressedflag === 0) keyPressed(); 

	
	if(packageSprite.isTouching(bottomBox)){
		console.log("isTouching bottomBox");
		bottomBox.bounce(packageSprite);
		packageSprite.velocityX= 0;
		packageSprite.velocityY= 0;	
		bottomBox.velocityY = 0;
		bottomBox.velocityX = 0;
  	}

	if(packageSprite.isTouching(rightBox)){
		console.log("isTouching rightBox");
		rightBox.bounce(packageSprite);
		packageSprite.velocityX= 0;
		packageSprite.velocityY= 0;	
		rightBox.velocityY = 0;
		rightBox.velocityX = 0;
  	}

	if(packageSprite.isTouching(leftBox)){
		console.log("isTouching leftBox");
		leftBox.bounce(packageSprite);
		packageSprite.velocityX= 0;
		packageSprite.velocityY= 0;	
		leftBox.velocityY = 0;
		leftBox.velocityX = 0;
  	}
/*
	  packageSprite.bounce(rightBox);
	  packageSprite.bounce(leftBox);
*/
     

if (drawspriteflag === false){
	
	drawspriteflag = true;
}  	
drawSprites();
}

function keyPressed() {
	console.log("Entered keyPressed()");
	
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setInertia(packageBody,10);
	Matter.Body.setMass(packageBody,8);

/*	Matter.Body.setStatic(bottomBox,true);	
	Matter.Body.setInertia(bottomBox,100);
	Matter.Body.setMass(bottomBox,1);*/
//	Matter.Body.setVelocity(packageBody, 5);		
	if (keyCode === DOWN_ARROW && keypressedflag < 2) {
		console.log("Down Arrow Pressed");
		keypressedflag = keypressedflag + 1;
	/*	Matter.Body.setInertia(bottomBox,100);
		Matter.Body.setMass(bottomBox,1); */
		console.log(keypressedflag);
    	console.log("Exit kepPressed()")
	}
}



