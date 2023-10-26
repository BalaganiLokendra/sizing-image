let imageElement = document.getElementById("image");
let warning = document.getElementById("warningMessage");
let originalImageWidth = "200px";
let imgWidth = document.getElementById("imageWidth");
imgWidth.textContent = originalImageWidth;
let newWidth = 200;

function increaseSize() {
    if (newWidth >= 300) {
        warning.textContent = "Too big. Decrease the size of the Image";
    } else {
        warning.textContent = "";
        newWidth = newWidth + 5;
        imageElement.style.width = newWidth + "px";
        imgWidth.textContent = newWidth + "px";
    }
}

function decreaseSize() {
    if (newWidth <= 100) {
        warning.textContent = "Can't Visible increase the size of the image";
    } else {
        warning.textContent = "";
        newWidth = newWidth - 5;
        imageElement.style.width = newWidth + "px";
        imgWidth.textContent = newWidth + "px";
    }
}

imageElement.style.width = originalImageWidth;