window.onload = function(event) {
	arvattava = getRandomInteger(1, 10);
}
var arvattava;

function getRandomInteger(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareNumbers(first, second) {
	return (first == second);
}


function guessTheNumber(id) {
	var text = document.getElementById(id).value;
	var number = new Number(text);
	if (!isNaN(number) && number >= 1 && number <= 10) {
		if (compareNumbers(arvattava, number) == true) {
			alert("Arvasit oikein");
		} else {
			alert("Arvasit väärin");
		}
		arvattava = getRandomInteger(1,10)
		
	}
	else {
		alert("Syötetty luku ei kelpaa");
	}
}
	



