$(document).ready(function() {
    $(".tab").click(function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");

        var id = $(this).attr('id');
        $(".tab-content .content").fadeOut(200, function() {
            if (id === "phonesTab") {
                $("#phonesContent").fadeIn(200).css('opacity', 1);
            } else if (id === "laptopsTab") {
                $("#laptopsContent").fadeIn(200).css('opacity', 1);
            }
        });
    });

    $(".accordion-header").click(function() {
        $(this).next(".accordion-content").slideToggle();
    });

    $("#openModalBtn").click(function() {
        $("#myModal").fadeIn();
    });

    $(".close, #myModal").click(function(event) {
        if ($(event.target).is("#myModal") || $(event.target).is(".close")) {
            $("#myModal").fadeOut();
        }
    });

    $("#hamburgerMenu").click(function() {
        $("#tabs").toggleClass("open");
    });
});