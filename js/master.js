const hamburger = $(".hamburger");
const sideMenu = $(".side-menu");

$(function(){
    console.log("              _      _                     \n" +
                "             (_)    | |                    \n" +
                "  __ _  _ __  _   __| |%c  ___   _ __    ___ \n" +
                "%c / _` || '__|| | / _` |%c / _ \' | '_ \'  / _ \'\n" +
                "%c| (_| || |   | || (_| |%c| (_) || | | ||  __/\n" +
                "%c \'__, ||_|   |_| \'__,_|%c \'___/ |_| |_| \'___|\n" +
                "%c  __/ |                                    \n" +
                " |___/                     (C) 2022 grid%cone",
                'color: #E68011;', 'color: #000;', 'color: #E68011;',
                'color: #000;', 'color: #E68011;', 'color: #000;',
                'color: #E68011;', 'color: #000;', 'color: #E68011;');

    /* Navbar Start */
    $("#sidebar ul.mainlist").clone().appendTo(sideMenu);

    hamburger.on("click", mobileMenu);

    function mobileMenu() {
        hamburger.toggleClass("active");
        sideMenu.toggleClass("active");
    }
    /* Navbar End */
});


function closeMenu() {
    hamburger.removeClass("active");
    sideMenu.removeClass("active");
}