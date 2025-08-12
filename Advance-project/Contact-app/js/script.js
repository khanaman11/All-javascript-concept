let l_active_box = document.querySelector("#l-active");
let l_active_Btn = document.querySelector("#l-active-btn");
let s_active_box = document.querySelector("#s-active");
let s_active_Btn = document.querySelector("#s-active-btn");

s_active_Btn.addEventListener('click' , ()=>{
    s_active_box.style.opacity = "0"
    s_active_box.classList = "animate__animated animate__fadeOutUp active-box s-active";
    l_active_box.classList = "animate__animated animate__fadeInDown active-box l-active";
    l_active_box.style.opacity = "1";
    l_active_box.style.zIndex = "1"
})


l_active_Btn.addEventListener('click' , ()=>{
    l_active_box.classList = "animate__animated animate__fadeOutUp active-box s-active";
    s_active_box.classList = "animate__animated animate__fadeInDown active-box l-active";
    s_active_box.style.opacity = "1";
    s_active_box.style.zIndex = "1"
})