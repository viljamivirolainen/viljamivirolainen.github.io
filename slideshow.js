var jsonData = null;
if (localStorage.currentSlide) {
    localStorage.currentSlide = Number(localStorage.currentSlide);
} else {
    localStorage.currentSlide = 0;
}

window.onload = function() {
	$.getJSON("https://virolav2-e203f.firebaseio.com/.json", function( data ) {
			console.log(data);
			jsonData = data;$('#slideDate').html(data.articles[localStorage.currentSlide].päivämäärä);
            $('#slideHeader').html(data.articles[localStorage.currentSlide].otsikko);
            $('#slideText').html(data.articles[localStorage.currentSlide].sisältö);
    		var url = jsonData.articles[localStorage.currentSlide].kuva
    		document.getElementById("slides").style.backgroundImage = "url("+url+")";

    });
}

var play = window.setInterval(function(){
    nextSlide();
},2000);

function nextSlide(){ 
    localStorage.currentSlide = (localStorage.currentSlide + 1) % 3;
    $('#slideDate').html(jsonData.articles[localStorage.currentSlide].päivämäärä);
    $('#slideHeader').html(jsonData.articles[localStorage.currentSlide].otsikko);
    $('#slideText').html(jsonData.articles[localStorage.currentSlide].sisältö);
    var url = jsonData.articles[localStorage.currentSlide].kuva
    document.getElementById("slides").style.backgroundImage = "url("+url+")";
}

function previousSlide(){
    if(localStorage.currentSlide == 0){
        localStorage.currentSlide = 2;
    } else {
      localStorage.currentSlide = localStorage.currentSlide - 1 ;
    }
    
    $('#slideDate').html(jsonData.articles[localStorage.currentSlide].päivämäärä);
    $('#slideHeader').html(jsonData.articles[localStorage.currentSlide].otsikko);
    $('#slideText').html(jsonData.articles[localStorage.currentSlide].sisältö);  
    var url = jsonData.articles[localStorage.currentSlide].kuva
    document.getElementById("slides").style.backgroundImage = "url("+url+")";
}

function togglePlay(){
  if(document.getElementById("playButton").innerHTML == "Pysäytä") {
      clearInterval(play);
      document.getElementById("playButton").innerHTML = "Käynnistä";
  } else {
      play = window.setInterval(function(){
          nextSlide();
      },2000); 
      document.getElementById("playButton").innerHTML = "Pysäytä";
  }
}


