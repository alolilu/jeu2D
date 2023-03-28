function make_nuage() {
    imgNuage = new Image();
    imgNuage.src = 'assets/img/nuage.png';
    imgNuage.onload = function () {
        ctx.drawImage(imgNuage, 200, 20, largeurNuage, hauteurNuage);
    }
}