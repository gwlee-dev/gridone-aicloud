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