
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
		var monster = {
			x : 0,
			y : 0
		};
		monsters[i] = monster;
		while(isNotLegitCoordinate) {
			x = 32 + (Math.random() * (width - 64));
			y = 32 + (Math.random() * (height - 64));
			if(x != hero.x && y != hero.y && monsters.every(h => h.x != x && h.y != y)) {
				monsters[i].x = x;
				monsters[i].y = y;
				isNotLegitCoordinate = false;			
			}
		}

	}
};


var drawMonsters = function(ctx) {
	for (var i = monsters.length - 1; i >= 0; i--) {
		ctx.drawImage(monsterImage, monsters[i].x, monsters[i].y);
	}

};