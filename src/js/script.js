const btn = document.getElementById("share-btn");

btn.onclick = popup;

function popup() {
    const popup = document.getElementById("pop-up");
    popup.style.display = "flex";
}