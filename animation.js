var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.height = 480;
canvas.width = 512;


var backgroundImage = new Image();
backgroundImage.onload = function() {
	context.drawImage(backgroundImage,0,0)
}
backgroundImage.src = 'background.png';

var playerImage = new Image();
playerImage.onload = function() {
	context.drawImage(playerImage, canvas.width/2, canvas.height/2);
};
playerImage.src = 'hero.png';

var enemyImage = new Image();
enemyImage.onload = function() {
	context.drawImage(enemyImage, canvas.width/4, canvas.height/4);
	context.drawImage(enemyImage,canvas.width/4,canvas.height*(3/4))
	context.drawImage(enemyImage,canvas.width*(3/4),canvas.height*(3/4))
	context.drawImage(enemyImage,canvas.width*(3/4),canvas.height/4)
};
enemyImage.src = 'monster.png';




