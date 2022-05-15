
let body = document.getElementById("body");
let red = document.getElementById("redBtn");
let blue = document.getElementById("blueBtn");
let black = document.getElementById("blackBtn");
let para = document.getElementById("para");
let title = document.getElementById("title");

red.addEventListener('click', function(){
    body.style.background = "red";
});

blue.addEventListener('click', function(){
    body.style.background = "blue";
});

black.addEventListener('click', function(){
    body.style.background = "black";
    title.style.color = "red";
    title.style.background = "white"
    para.style.color = "white";
});
