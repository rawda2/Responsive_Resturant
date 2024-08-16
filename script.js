var nav=document.getElementById("nav");
var head=document.getElementById("head");

function navColor(){
    const headerHeight = head.offsetHeight;
    if(window.scrollY>headerHeight){
        nav.style.backgroundColor="black";
    }
    else{
        nav.style.backgroundColor="transparent";
    }
}

window.addEventListener("scroll",navColor)




var menu_button=document.getElementById("menu");
var menu=document.getElementById("hidden-menu");
var close=document.getElementById("close");
let isMenuVisible = false;

const showMenu = () => {
    menu.style.transform = 'translateX(0)';
    isMenuVisible = true;
};

const hideMenu = () => {
    menu.style.transform = 'translateX(-100%)';
    isMenuVisible = false;
};

menu_button.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);

