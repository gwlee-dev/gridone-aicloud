$(function(){
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

    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        window.location.href='./browser.html';
    }
    
    /* Navbar Start */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    for(var i = 0; i < navLink.length; i++){
        navLink[i].addEventListener("click", closeMenu);
    }

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    /* Navbar End */
});