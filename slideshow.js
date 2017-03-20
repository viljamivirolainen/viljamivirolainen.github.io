window.onload = function(event) {
	$.getJSON("https://virolav2-e203f.firebaseio.com/.json", function( data ) {
			for (var i = data.articles.length - 1; i >= 0; i--) {
				if(i===0) {
					$( "<li class =\"article showing"+ "\">").appendTo("#articles");
				}
				else {
					$( "<li class =\"article"+ "\">").appendTo("#articles");	
				}
				
				$( "<p>"+ data.articles[i].sisältö +"</p>" ).appendTo( "#articles" );
				$( "<img src="+data.articles[i].kuva+">").appendTo("#articles");
				$( "</li>").appendTo("#articles");
			}
			
			console.log(data);
	});
}

var articles = document.querySelectorAll('#articles .article');
var currentArticle = 0;
var articleInterval = setInterval(nextArticle,2000);

function nextArticle() {
    articles[currentArticle].className = 'article';
    currentArticle = (currentArticle+1)%articles.length;
    articles[currentArticle].className = 'article showing';
}


