/* Menu Toggle */
var navLinks = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right = "0";

}

function hideMenu(){
    navLinks.style.right = "-200px";

}

// Counter JS
jQuery(document).ready(function( $ )
{
       $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
