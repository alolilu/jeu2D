function make_dirt() {
    imgDirt = new Image();
    imgDirt.src = 'assets/img/terre.png';
    imgDirt.onload = function () {
        ctx.drawImage(imgDirt, 0, 390, largeurDirt, hauteurDirt);
    }
}