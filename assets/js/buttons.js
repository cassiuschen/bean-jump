$('.share').click(function(){
	$('#sharePage').css("display", "block");
});

if($('#sharePage').css("display") == "block") {
	$('#gameOverMenu').click(function(){
		$('#sharePage').css("display", "none");
	});
}

if($('#rankPage').css("display") == "block") {
	$('#gameOverMenu').click(function(){
		$('#rankPage').css("display", "none");
	});
}