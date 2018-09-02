/*global $*/
$(document).ready(function() {
    $(".my-button-anim").click(function() {
        $(".box").animate({
            width: "200px",
            left: "200px",
        }, 1000);
    });
    $(".my-button-re").click(function() {
        $(".box").animate({
            width: "60px",
            left: "0px",
        }, 1000);
    });
});