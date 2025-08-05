// ***************************** 1.How to get value in input field ************************* //

// let inputField = document.querySelector("#inputField");
// let getValueBtn = document.querySelector("#getValueBtn");

// function getValue(){
//     getValueBtn.addEventListener('click' , ()=>{
//         let value = (inputField.value);
//         console.log(value)
//     })
// }
// getValue();


// **************************** Element access method **************************** //

// Common Methods:
// getElementById("id")

// getElementsByClassName("class")

// getElementsByTagName("tag")

// querySelector("selector")

// querySelectorAll("selector")


// ********************************** 2. Changing HTML Content ************************ //
// let heading = document.querySelector("#heading");
// let changeContantBtn = document.querySelector("#changeContantBtn");

// const changeText = ()=>{
//     changeContantBtn.addEventListener('click' , ()=>{
//         heading.textContent = "Amanullah khan";
//         heading.style.color = "Orange"
//     })
// }
// changeText()


// ************************* 3.Change background color when button is clicked.************ //
// let box = document.querySelector(".container");
// let changeColorBtn = document.querySelector("#changeColorBtn");

// const colorChange = ()=>{
//     changeColorBtn.addEventListener('click' , ()=>{
//         box.style.background = "yellow"
//     })
// }
// colorChange()

// ****************************** click button to show message ********************* //
// let showMessageBtn = document.querySelector("#showMessageBtn");
// const showMessage = ()=>{
//     showMessageBtn.addEventListener('click' , ()=>{
//         alert("Click button to show message")
//     })
// }
// showMessage()

//  ********************************* 5. Creating & Adding Elements ************************* //
// let listBox = document.querySelector("#list-box");
// let AddItem = document.querySelector("#AddItem");

// const createElem = ()=>{
//     AddItem.addEventListener('click' , ()=>{
//         let list2 = document.createElement("li");
//         console.log(list2)
//         list2.textContent = "item2";
//         listBox.appendChild(list2);
//         setTimeout(() => {
//             listBox.removeChild(listBox.lastElementChild)
//         }, 3000);
//     })
// }
// createElem()

// ******************************** 6. Modifying Attributes **************************** //
// let myImg = document.querySelector("#myImg");
// let changeBtn = document.querySelector("#change-btn");

// const changeImg = ()=>{
//     changeBtn.addEventListener("click" , ()=>{
//         myImg.setAttribute("src" , "./img/img2.jpg")
//     })
// }
// changeImg()

// ******************************** 7. Input Validation using DOM ********************* //
let inputBox = document.querySelector("#email");
console.log(inputBox)
let btn = document.querySelector("#checkValidation");

const getValidate = ()=>{
    btn.addEventListener('click' , ()=>{

        if (inputBox.value === "") {
            alert("Email field is requerid")
        }
        else{
            alert("Submitted :" + inputBox.value)
        }
    })
}
getValidate()
