
const pulsantiSlider = document.querySelectorAll("[data-pulsanticarosello]")

pulsantiSlider.forEach(button => {
    button.addEventListener("click", e => {
        console.log("click")

        const offset = button.dataset.pulsanticarosello === "prossimo" ? 1 : -1
        const slides = button.closest("[data-carosello]").querySelector("[data-slides]")
        const slideAttiva = slides.querySelector('[data-imgattiva]')

        console.log(slideAttiva)

        let newIndex = [...slides.children].indexOf(slideAttiva) + offset
        if (newIndex < 0) {
            newIndex = slides.children.length - 1
        }
        if (newIndex >= slides.children.length) {
            newIndex = 0
        }
        
        let newIndex1 = newIndex - 1
        if (newIndex1 < 0) {
            newIndex1 = slides.children.length - 1
        }
        if (newIndex1 >= slides.children.length) {
            newIndex1 = 0
        }

        let newIndex2 = newIndex + 1
        if (newIndex2 < 0) {
            newIndex1 = slides.children.length - 1
        }
        if (newIndex2 >= slides.children.length) {
            newIndex2 = 0
        }
        
        console.log(newIndex, newIndex1, newIndex2)

        slides.children[newIndex].dataset.imgattiva = true
        delete slides.children[newIndex].dataset.imgnonattiva2
        delete slides.children[newIndex].dataset.imgnonattiva1
        delete slideAttiva.dataset.imgattiva
        slideAttiva.dataset.imgnonattiva1 = true

        slides.children[newIndex2].dataset.imgnonattiva2 = true
        delete slides.children[newIndex2].dataset.imgnonattiva1
        slides.children[newIndex1].dataset.imgnonattiva1 = true
        delete slides.children[newIndex1].dataset.imgnonattiva2    
        
    })
})