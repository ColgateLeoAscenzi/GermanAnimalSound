

$(document).ready(function() {
    $(".li").click(function(event) {
        var sound = new Howl({src: ['./sounds/'+this.attr("id")+'.mp3']}).play();
    });
});


$("#Cat").on("click",function(){
	var sound = new Howl({src: ['./sounds/cat.mp3']}).play();
});
