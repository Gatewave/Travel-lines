$(document).ready(function() {
    $("#countries").msDropdown();
    // $('#myModal').modal('toggle');
    $("body").niceScroll({
        cursorcolor: "#424242", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "8px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        zindex: [9999], // change z-index for scrollbar div

    })
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
