function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		for (var i = 0; i< spectrum.length; i++){
//			var x = map(i, 0, spectrum.length, 0, width);
//		    var h = -height + map(spectrum[i], 0, 255, height, 0);
//		    rect(x, height, width / spectrum.length, h );
            
            x = 0;
            h = height/spectrum.length;

            y = i * h;
            w = map(spectrum[i], 0, 255, 0,width);

		    fill(spectrum[i], 255- spectrum[i] , 0)

            
            rect(x , y, w, h);
  		}
	
		pop();
	};
}
