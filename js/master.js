var menuOpenStatus = 0;
var currentPage = 1;

$(document).ready(function() {
    console.log("              _      _                     \n" +
                "             (_)    | |                    \n" +
                "  __ _  _ __  _   __| |%c  ___   _ __    ___ \n" +
                "%c / _` || '__|| | / _` |%c / _ \' | '_ \'  / _ \'\n" +
                "%c| (_| || |   | || (_| |%c| (_) || | | ||  __/\n" +
                "%c \'__, ||_|   |_| \'__,_|%c \'___/ |_| |_| \'___|\n" +
                "%c  __/ |                                    \n" +
                " |___/                     (C) 2021 grid%cone",
                'color: #E68011;', 'color: #000;', 'color: #E68011;',
                'color: #000;', 'color: #E68011;', 'color: #000;',
                'color: #E68011;', 'color: #000;', 'color: #E68011;');
    /*$('html').animate({scrollTop : 0},10);*/
});

var theme = "light";

function themeChange() {
    if(theme == "light"){
        theme = "dark";
        $("img#theme-icon").attr("src","svg/moon-solid.svg");

        $("div#aida-section").css("background-color", "#000000");
        $("div#aida-section span").css("color", "#ffffff");
        $("div#aida-section span").css("border-color", "#ffffff");
        $("div#aida-section b").css("color", "#ffffff");
        $("svg#aida-icon .cls-3").css("fill","#ffffff");
    }
    else{
        theme = "light";
        $("img#theme-icon").attr("src","svg/moon-regular.svg");

        $("div#aida-section").css("background-color", "#ffffff");
        $("div#aida-section span").css("color", "#000000");
        $("div#aida-section span").css("border-color", "#000000");
        $("div#aida-section b").css("color", "#000000");
        $("svg#aida-icon .cls-3").css("fill","#000000");
    }
}