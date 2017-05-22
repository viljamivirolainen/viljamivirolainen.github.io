
// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

var monstersCaught = 0;

var monsters = [];

var createMonsters = function(width,height) {
	for (var i = 0; i < 8; i++) {
		var isNotLegitCoordinate = true
		var x = 0;
		var y = 0;
		while(isNotLegitCoordinate) {
			x = 32 + (Math.random() * (width - 64));
			y = 32 + (Math.random() * (height - 64));
			if(x < (width - 64) && y < (height - 64)) {
				if(hero.x <= (x + 32)
					&& x <= (hero.x + 32)
					&& hero.y <= (y + 32)
					&& y <= (hero.y + 32)) {
				    // collision detected!
				} else {
					if(monsters.every(h => !(h.x <= (x + 32)
					&& x <= (h.x + 32)
					&& h.y <= (y + 32)
					&& y <= (h.y + 32)))) {
						isNotLegitCoordinate = false;			
					}	
				}
			}
			
		}
		var monster = {
			x:0,
			y:0
		};
		monster.x = x;
		monster.y = y;
		monsters[i] = monster;
		

	}
};


var drawMonsters = function(ctx) {
	for (var i = monsters.length - 1; i >= 0; i--) {
		ctx.drawImage(monsterImage, monsters[i].x, monsters[i].y);
	}

};