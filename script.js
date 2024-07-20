var sign = document.querySelector(".sign-in");
var signinContent = document.querySelector("label");
var exceptsign = document.querySelector("div:not(.sign-in-content)");

sign.addEventListener("mouseover", () => {
    signinContent.style.display = "flex";
});

sign.addEventListener("mouseleave", () => {
    signinContent.addEventListener("mouseleave", () => {
        signinContent.style.display = "none";
    })

    //needs some more logic, as it becomes only when we go in order, i.e., first leave sign, then signinContent, then only display none, otherwise it stil shows
});

var a = document.querySelector(".location");
var b = document.querySelector(".popup");
var main = document.querySelector(".main");
a.addEventListener("click", () => {
    b.style.display = "flex";
    main.style.filter = "blur(1px)";
});

var c = document.querySelector(".popup i");
c.addEventListener("click", () => {
    b.style.display = "none";
    main.style.filter = "blur(0px)";
});

// 


var all = document.querySelector(".container-1>div:first-child");
var sidebar = document.querySelector(".side-bar");

all.addEventListener("click", ()=>{
    sidebar.style.display = "block";
});

var close = document.querySelector(".side-bar>i");

close.addEventListener("click", ()=>{
    sidebar.style.display = "none";
});

