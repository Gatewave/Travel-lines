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
    }else{
        $("#categories").fadeIn(2000,"swing");
        $("#toggle_menu").removeClass("d-none");
    }
});
