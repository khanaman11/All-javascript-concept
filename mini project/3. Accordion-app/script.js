let accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    let title = item.querySelector(".accordion-title");
    let content = item.querySelector(".accordion-content");

    title.addEventListener('click', () => {
        for (let i = 0; i < accordionItems.length; i++) {
            if (accordionItems[i] != item) {
                accordionItems[i].classList.remove("active")
            } else {
                item.classList.toggle('active')
            }

        }

    })
})