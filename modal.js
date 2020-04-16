const modalOverlay = document.querySelector(".modal_overlay")
const pratos = document.querySelectorAll(".prato")



for (let prato of pratos) {
    prato.addEventListener("click", function () {
        const imgId = prato.getAttribute("id")
        const titulo = prato.querySelector(".titulo p").textContent
        const subTitulo = prato.querySelector(".autor").textContent
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `/assets/${imgId}.png`
        modalOverlay.querySelector("h3").innerHTML = `${titulo}`
        modalOverlay.querySelector("h5").innerHTML = `${subTitulo}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})

