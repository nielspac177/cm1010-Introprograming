function LineToTool(){
	//setup the icon and name for the Line to tool
    this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	
    //initialize variables for the starting point of the line
    var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

    
	this.draw = function(){

		//if the mouse is pressed and the startMouseX = -1, set the line's starting location to the mouse position when it was pressed
        if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
            
            //draw a line from the position when the mouse was pressed to the current mouse position
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        
        //reset the all the variables to the initial value before the mouse button pressed
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
