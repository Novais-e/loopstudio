const navToggle = document.querySelector(".nav-toggle")
const navItens = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", function () {
    const menu = document.querySelector(".nav-ul").classList.toggle("nav-open")


})

navItens.forEach(function (links) {
    links.addEventListener("click", function () {
        const menu2 = document.querySelector(".nav-ul").classList.remove("nav-open")
    })
})