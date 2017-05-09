function Enemy(x,y,speed) {
	// Monster image
	this.x = x;
	this.y = y;
	this.speed = speed;
	
	// Throw the monster somewhere on the screen randomly
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

var enemies = [];

function createEnemies() {
	for (i= 0; i < 4; i++) {
		var enemy = new Enemy()
	}
}

function moveEnemies() {
	for (i = 0; i<enemies.length; i++) {
		enemies[i].move
	}
}

