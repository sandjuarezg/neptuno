const elements = document.querySelectorAll(".offcanvas")

// Scroll
window.onscroll = function() {
    var y = window.scrollY;

    elements.forEach(function(element) {
        var elementTop = element.offsetTop - 300;
        
        if (y > elementTop) {
            element.style.left = "0";
        }
    })
}