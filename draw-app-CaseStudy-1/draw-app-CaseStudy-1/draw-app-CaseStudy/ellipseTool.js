function EllipseTool(){
	this.icon = "assets/ellipse.jpg";
	this.name = "Ellipse";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
                noFill();
				ellipse(startMouseX,startMouseY, (mouseX-startMouseX)*2, (mouseY-startMouseY)*2);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
