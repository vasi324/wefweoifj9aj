
var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
if(character.classList != "animate"){
    character.classList.add("animate");
}
setTimeout(function(){
    character.classList.remove("animate");
} ,500);
}

var checkdead = setInterval(function(){
var charactertop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockleft<20 && blockleft>0 && charactertop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("you lose");
}
} ,10);

function retry(){
    window.location.reload();
}