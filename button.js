
$("#btn_off").on("click",function(){
	$("#wrapper").hide("slow");
	$("#btn_off").text("Ok... (refresh the page to get it again)");
});


$("#Cat").on("click",function(){
	var sound = new Howl({src: ['./sounds/cat.mp3']}).play();
});
