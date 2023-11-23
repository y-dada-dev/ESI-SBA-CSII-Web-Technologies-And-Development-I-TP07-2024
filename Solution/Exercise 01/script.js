$(document).ready(function(){
    var navLinks = ["Home", "About", "Contact"];
    var nav = $("<nav></nav>").prependTo("body");

    $.each(navLinks, function(index, value){
        $("<a></a>")
            .attr("href", "#")
            .text(value)
            .appendTo(nav)
            .click(function() {
                $(".test").toggle();
            });
    });
});


$(document).ready(function(){
    $("nav")
        .css({
            "background-color": "#333",
            "color": "#fff",
            "padding": "10px",
            "text-align": "center"
        });

    $("nav a")
        .css({
            "color": "#fff",
            "text-decoration": "none",
            "margin": "0 15px"
        });
});


$(document).ready(function(){
    $("section").on("click", function(){
        $(this).remove();
    });
});
