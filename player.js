function Player(x,y,speed) {
	// Hero image

	this.speed = speed;
	this.x = x;
	this.y = y;

	

	this.reset = function() {
		this.x = x;
		this.y = y;	
	};


	this.move = function(direction) {
		switch(direction) {
			case up :
				this.y -= this.speed;
				break;
			case down : 
				this.y += this.speed;
				break;
			case left : 
				this.x -= this.speed;
				break;
			case right :
				this.x += this.speed;
				break;

		}
	}

	this.changeSpeed = function(amount) {
		this.speed += amount;
	}
}
