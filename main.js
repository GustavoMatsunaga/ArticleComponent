const share = document.querySelector("#share-button")
const box = document.querySelector("#share-box")
share.addEventListener('click', () => {
    box.classList.toggle("hidden")
})
