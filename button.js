

$(document).ready(function() {
    $("li").click(function(event) {
        alert($(this).attr("id"));
        var sound = new Howl({src: ['./sounds/'+$(this).attr("id")+'.mp3']}).play();
    });
});
