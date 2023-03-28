function make_sun() {
    imgSun = new Image();
    imgSun.src = 'assets/img/soleil.png';
    imgSun.onload = function () {
        ctx.drawImage(imgSun, 20, 20, largeurSoleil, hauteurSoleil);
    }
}