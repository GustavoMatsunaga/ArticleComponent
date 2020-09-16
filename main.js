const screen = document.querySelector(".main")
const shareIcon = document.getElementById("share-icon")
const box = document.querySelector("#share-box")
shareIcon.addEventListener('click', () => {
    box.classList.toggle("hidden")
    shareIcon.classList.toggle("activated")
    shareColorChange()
})

function shareColorChange () {
    if (screen.clientWidth <= 760) {
            shareIcon.src = "./images/icon-share.svg";
            shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
    else {
        if (shareIcon.classList.length > 1) {
            shareIcon.src = "./images/icon-share-inverted.svg";
            shareIcon.style.backgroundColor = "hsl(217, 19%, 35%)";
    
        } else {
            shareIcon.src = "./images/icon-share.svg";
            shareIcon.style.backgroundColor = "hsl(210, 46%, 95%)";
        }
    }
}