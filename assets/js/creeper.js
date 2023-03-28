let imgCreeper = new Image();
imgCreeper.src = 'assets/img/creeper.png';

function addCreeperSpeed() {
    if (PosXcreeper > - largeurPersoCreeper) {
        PosXcreeper -= distance;
    }
    else {
        PosXcreeper = largeurTotal;
    }
}

function drawCreeper() {
    ctx.drawImage(imgCreeper, PosXcreeper, PosYcreeper, largeurPersoCreeper, hauteurPersoCreeper);
}