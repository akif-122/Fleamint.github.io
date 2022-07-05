

// NAVBAR 
let mMenuOpener = document.querySelector(".m-menu-toggler span");
let mMenuClose = document.querySelector(".m-menu-close span");
let mMenu = document.querySelector(".mobile-menu");
let body = document.querySelector("body");

mMenuOpener.addEventListener("click", function(){
	mMenu.style.right = "0%"
},true)

body.addEventListener("click", function(){
	mMenu.style.right = "-150%";
},true)

mMenuClose.addEventListener("click", function(){
	mMenu.style.right = "-150%";
},true)

mMenu.addEventListener("click", function(){
	mMenu.style.right = "0%";
},true);





// WALLET POPUP

let popupShow = document.querySelector(".popupShow");
let popup = document.querySelector(".wallet-popup");
let popupClose = document.querySelector(".popup-close span");
let popupContent = document.querySelector(".wallet-pop-content");


popupContent.addEventListener("click", function(){
	popup.style.opacity = "1";
	popup.style.pointerEvents = "auto";
},true);
popupShow.addEventListener("click", function(){
	popup.style.opacity = "1";
	popup.style.pointerEvents = "auto";
})



popupClose.addEventListener("click", function(){
	popup.style.opacity = "0";
	popup.style.pointerEvents = "none";
})

popup.addEventListener("click", function(){
	popup.style.opacity = "0";
	popup.style.pointerEvents = "none";
},true)