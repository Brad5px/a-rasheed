let menu = document.getElementById("menu");
let head =document.getElementById("head");
let menuClose =document.getElementById("menuClose");


menu.onclick = function() {
    head.style.right = "0";
    menuClose.style.display="block"
    menu.style.display="none"
}


menuClose.onclick = function() {
    head.style.right = "-100px";
    menuClose.style.display="none"
    menu.style.display="block"
}