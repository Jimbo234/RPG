function initInput(){
  
  inputs = [
        up = false,
        down = false,
        left = false,
        right = false,
  ];
  
  document.addEventListener('keydown', function(event) {
   
    if(event.keyCode == 37) {
        inputs.left = true;
    }
    else if(event.keyCode == 39) {
        inputs.right = true;
    }
    else if(event.keyCode == 38) {
        inputs.up = true;
    }
    else if(event.keyCode == 40) {
        inputs.down = true;
    }
  });
  
  document.addEventListener('keyup', function(event) {
     
      if(event.keyCode == 37) {
          inputs.left = false;
      }
      else if(event.keyCode == 39) {
          inputs.right = false;
      }
      else if(event.keyCode == 38) {
          inputs.up = false;
      }
      else if(event.keyCode == 40) {
          inputs.down = false;
      }
  });
}