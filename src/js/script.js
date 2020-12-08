const btn = document.getElementById("share-btn");
const shareArrow = document.getElementById("share");

shareArrow.onclick = changeBackground;

function changeBackground() {
    shareArrow.style.background = "hsl(217, 19%, 35%)";
}

btn.onclick = popup;

function popup() {
    const popup = document.getElementById("pop-up");
    popup.classList.toggle("show-me");
}