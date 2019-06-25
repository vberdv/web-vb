$(document).ready(function () {

    var is_mobile = false;

    if( $('.player').css('display')=='none') {
        is_mobile = true;
    }
    if (is_mobile == true) {
        $('.big-background').addClass('big-background-default-image');
    }else{
        $(".player").mb_YTPlayer();
    }


    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function () {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({type: "image"});
    $(".popup_content").magnificPopup({
        type: "inline",
        midClick: true
    });

    $(".section_header").animated("fadeInUp", "fadeOutDown");

    $(".animation_1").animated("flipInY", "fadeOutDown");
    $(".animation_2").animated("fadeInLeft", "fadeOutDown");
    $(".animation_3").animated("fadeInRight", "fadeOutDown");

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });

    $(".toggle_mnu").click(function () {
        $(".sandwich").toggleClass("active");
    });

    $(".top_mnu ul a").click(function () {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    $(".toggle_mnu").click(function () {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        }
        ;
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#callback").submit(function () {
        $.ajax({
            type: "GET",
            url: "",
            data: $("#callback").serialize()
        }).done(function () {
            alert("Сообщение отправлено!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

    $("input, select, textarea").jqBootstrapValidation();
    $(".top_mnu ul a").mPageScroll2id();

});

// Загружает анимацию на главной странице
$(window).load(function () {

    $(".loader_inner").delay(600).fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 
