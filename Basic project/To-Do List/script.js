let inputField = document.querySelector("#inputField");
let addBtn = document.querySelector("#add-Btn");
let listCnt = document.querySelector("#list-cnt");


addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTodo(inputField.value.trim());
});


function createTodo(value) {

    if (value === "") {
        alert("Please enter a task.");
        return;
    }

    // create element
    let liELem = document.createElement("li");
    let detBtn = document.createElement("button");
    let todoBox = document.createElement("div");

    detBtn.className = "Delete";
    todoBox.className = "todoBox";
    liELem.className = "todoList"

    // insert text in element
    liELem.innerText = value;
    detBtn.innerText = "Delete";

    // append child
    todoBox.appendChild(liELem);
    todoBox.appendChild(detBtn);
    listCnt.appendChild(todoBox);

    // detBtn click pr todoBox ko delete kr do 
    detBtn.addEventListener('click', () => {
        todoBox.remove();
    });

    liELem.addEventListener('click', () => {
        liELem.classList.toggle("completed")
    })


    inputField.value = ""
}




