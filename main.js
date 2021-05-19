// Includes the init function as well as the main game loop.

function init(){
  
  initSprites();
  initInput();
  
  canvas = document.getElementById("rpg");
  ctx = canvas.getContext("2d");
  
  resize();
  
  state = {
    pixelscale: { // Size of the pixels.
      x: 3,
      y: 3,
    }
  };
  
  player = {
    x:0,
    y:0,
    dx: 0, //direction x
    dy: 1, //direction y
  };
  
  moveTimer = 0;
  
  setInterval(onFrame, 1000/60);


  
  // The gameboy color palette, use tone[n] to get colors for drawing.
  // 1 is the lightest, 4 is the darkest. 
  // 0 is completely transparent.
  
  tone = [
    "rgba(0,0,0,0)",
    "#e0f8d0",
    "#88c070",
    "#346856",
    "#081820",
  ];
}

function onFrame(){
  
  ctx.fillStyle = tone[1];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
    
  generateGrid(16);
  
  if (inputs.up) move(0, -2);
  if (inputs.down) move(0, 2);
  if (inputs.left) move(-2, 0);
  if (inputs.right) move(2, 0);
  
  if(moveTimer){
     player.x += mx;
     player.y += my;
    moveTimer--;
  }
  
  if (player.dx ==  1) drawSprite(sprites.player.side,  16,  player.x,  player.y, 1, 1, false);
  if (player.dx == -1) drawSprite(sprites.player.side,  16,  player.x,  player.y, 1, 1, true );
  if (player.dy ==  1) drawSprite(sprites.player.front, 16,  player.x,  player.y, 1, 1, false);
  if (player.dy == -1) drawSprite(sprites.player.back,  16,  player.x,  player.y, 1, 1, false);
  // TODO: Make a facing up sprite.
}

function move(x, y){ //placeholder function, probably want something more versatile in the future
  if (!moveTimer){
    moveTimer = 8;
    
    player.dx = x / Math.abs(x);
    player.dy = y / Math.abs(y);
    
    mx = x;
    my = y;
  }
}