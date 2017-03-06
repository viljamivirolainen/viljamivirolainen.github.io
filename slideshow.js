window.onload = function(event) {
	$.getJSON("https://virolav2-e203f.firebaseio.com/.json", function( data ) {
		$( "<p>"+ data.articles[0].sisältö +"</p>" ).appendTo( ".idea" )
		$( "<img src="+data.articles[0].kuva+"/>" ).appendTo( ".idea" )
		console.log(data);
	});
		
	
}