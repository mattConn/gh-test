"use strict";

// get elements
let hamburgerBtn = document.querySelector(".btn-hamburger__ctn");
let nav = document.querySelector(".navigation");

// toggle element class in classlist 
function toggleClass(element, classname)
{
    if(element.classList.contains(classname))
        element.classList.remove(classname);
    else
        element.classList.add(classname);
}

// toggle mobile navigation
hamburgerBtn.addEventListener("click", function(){
    toggleClass(nav, "navigation--visible");
});