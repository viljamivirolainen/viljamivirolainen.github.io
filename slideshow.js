window.onload = function(event) {
	$.getJSON("https://virolav2-e203f.firebaseio.com/.json", function( data ) {
			for (var i = data.articles.length - 1; i >= 0; i--) {
				$( "<li class =\"article\">").appendTo("#articles");
				$( "<p>"+ data.articles[i].sisältö +"</p>" ).appendTo( "#articles" );
				$( "<img src="+data.articles[i].kuva+">").appendTo("#articles");
				$( "</li>").appendTo("#articles");
			}
			
			console.log(data);
	});
		
	
}