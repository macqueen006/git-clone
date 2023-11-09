"use strict";


const handleNavVisibility = () => {
    // get viewport width
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Define breakpoints
    let breakpoints = [0, 200, 411, 507, 606, 703];
    let listElements = document.querySelectorAll('.repo-nav li');

    for (let i = 0; i < listElements.length; i++) {
        // viewport greater than current breakpoint
        let isVisible = viewportWidth >= breakpoints[i];
        listElements[i].style.display = isVisible ? 'block' : 'none';
    }
}
handleNavVisibility();
window.addEventListener('resize', handleNavVisibility);