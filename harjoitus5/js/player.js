// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";


var hero = {
	speed: 256 // movement in pixels per second
};

//var resetPlayer = function() {
//	hero.x = hero.origX;
//	hero.y = hero.origY;
//};



var setPlayerStartingCoordinates  = function(x,y) {
	//hero.origX = x;
	//hero.origX = y;
	hero.x = x;
	hero.y = y;
};
