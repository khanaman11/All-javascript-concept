let randomcolor = document.getElementById("randomColor");
let applycolor = document.getElementById("applyColor");
let inputfield = document.getElementById("inputField");
let currentColorValue = document.getElementById("currentColorValue");
let body = document.querySelector("body");

let colorArr = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black", "white"];
function changeColor(color){
    body.style.backgroundColor = color;
    currentColorValue.textContent = color;
}


function getRandomColor(){
  let randomColor = Math.floor(Math.random() * colorArr.length);
  changeColor(colorArr[randomColor]);
}

function getApplyColor(){
    let inputVal = inputfield.value;
    changeColor(inputVal)
}




