$(document).ready(function() {
    $("#countries").msDropdown();
    // $('#myModal').modal('toggle');

});
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $("#categories").fadeOut(200,"swing");
        $("#toggle_menu").removeClass("d-none");
        $("nav.navbar.navbar-expand-lg.navbar-light.bg-light").css({
            "position":"fixed",
            "top":"0",
            "z-index":"999",
            "width":"100%",
            "transition":"all ease-in-out 0.5s"
        });

    }else{
        $("#categories").fadeIn(2000,"swing");
        $("#toggle_menu").removeClass("d-none");
        $("nav.navbar.navbar-expand-lg.navbar-light.bg-light").css({
            "position":"relative",
        });
    }
});
