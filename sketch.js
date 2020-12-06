 const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 
 var engine, world, ground , ball; 
 
 function setup() { 
   createCanvas(400,400);
    engine = Engine.create(); 
    world = engine.world; 
    var options=
    { 
      isStatic:true
     } 
    
    var ball_options=
    {
     restitution:1.0
    }

     ground = Bodies.rectangle(200,390,400,20,options); 
     World.add(world,ground); 
     
    ball = Bodies.circle(200,100,50,ball_options);
    World.add(world,ball);

     console.log(ground.position.y); 
    } 
    
    function draw() { 
      background("black"); 
      Engine.update(engine); 
      rectMode(CENTER); 
      rect(ground.position.x,ground.position.y,400,20);

      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,50,50);
    }
