function generateGrid(size){
  // Placeholder function, just used for demonstration purposes.
  
  x = 0;
  y = 0;
  for (i = 0; i<50000; i++){
    fillPixelRect(tone[2], x*size, y*size, size, size);
    x+=2;
    if (x*state.pixelscale.x* size > canvas.width){
      x = x%2 - 1;
      y++;
    }
    if (y*state.pixelscale.y*size > canvas.height){
      return;
    }
  }
}

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawSprite(sprite, width, x, y, sx, sy, flip){
  // Iterates through all pixels, starting from the top left, going horizontally.
  // Goes down a line and continues once the x exceeds the width.
  // If you want to make it look like Missingno, set the width to an incorrect value.
  
  draw_x = 0;
  draw_y = 0;
  
  for (i = 0; i < sprite.length; i++){
    if (flip)  fillPixelRect(tone[sprite[i]], x - (draw_x * sx) + width - 1, y+draw_y * sy, sx, sy);
    if (!flip) fillPixelRect(tone[sprite[i]], x + (draw_x * sx), y+draw_y * sy, sx, sy);
    
    draw_x++;
    
    if (draw_x >= width){
      draw_x = 0;
      draw_y++;
    }
    
  }
}

function fillPixelRect(color, x, y, xscale, yscale){
  // Fills a box but uses pixel coordinates. 
  // Recieves a color (tone[n]) as the first argument.
  fx = Math.floor(x)*state.pixelscale.x;
  fy = Math.floor(y)*state.pixelscale.y;
  fxscale = Math.floor(xscale)*state.pixelscale.x;
  fyscale = Math.floor(yscale)*state.pixelscale.y;
  
  ctx.fillStyle = color;
  ctx.fillRect(fx, fy, fxscale, fyscale);
}

window.onresize = function(){
  resize();
}