let countELe = document.querySelector("#count-box");
let increseBtn = document.querySelector("#inc_btn");
let decreseBtn = document.querySelector("#dec-btn")
let resetBtn = document.querySelector("#reset-btn");

let count = 0

const counter = () => {
    countELe.innerHTML = `Count: ${count}`;

    if (count === 0) {
        countELe.style.color = "gray";
    } else if (count > 0 && count < 10) {
        countELe.style.color = "green";
    } else {
        countELe.style.color = "red";
    }

}

increseBtn.addEventListener('click', () => {
    if (count < 10) {
        count++
    }
    counter()
})

decreseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
    }
    counter()
})

resetBtn.addEventListener('click', () => {
    count = 0
    counter()
})



// ********************* keyUp or keydown pr increment or decrement **************** //
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        count++;
    } else if (e.key === 'ArrowDown') {
        count--;
    } else if (e.key === 'r') {
        count = 0;
    }
    counter()
});
