function make_perso() {
    imgPerso = new Image();
    imgPerso.src = 'assets/img/perso.png';
    imgPerso.onload = function () {
        ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
        draw();
    }
}
function draw() {
    document.addEventListener('keydown', (e) => {
        let startinterval = setInterval(function () {
            if (e.key == 'ArrowRight' && Posx + distance <= largeurTotal - largeurPerso + 10) {
                Posx += distance;
                ctx.clearRect(0, 120, largeurTotal, hauteurTotal - hauteurDirt - 10);
                ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
            }
            if (e.key == 'ArrowLeft' && Posx - distance >= 0) {
                Posx -= distance;
                ctx.clearRect(0, 120, largeurTotal, hauteurTotal - hauteurDirt - 10);
                ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
            }
            if (e.code == 'Space' && Posy + saut <= hauteurTotal - hauteurPerso) {
                Posy -= saut;
                ctx.clearRect(0, 120, largeurTotal, hauteurTotal - hauteurDirt - 10);
                ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
                let intervalDown = setInterval(function () {
                    Posy += saut;
                    ctx.clearRect(0, 120, largeurTotal, hauteurTotal - hauteurDirt - 10);
                    ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
                }, 250)
                setInterval(function () {
                    clearInterval(intervalDown);
                }, 250)
            }
        }, 10);
        setInterval(function () {
            clearInterval(startinterval);
        }, 100);
    });
}


// if (e.key == 'ArrowDown' && Posy - hauteurTotal - hauteurPerso - hauteurDirt - 100) {
                //     Posy += 4.2;
                //     hauteurPerso = 67;
                //     ctx.clearRect(0, 120, largeurTotal, hauteurTotal - hauteurDirt - 10);
                //     ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
                //     let intervalDown = setInterval(function () {
                    //         Posy -= 4.2;
                    //         hauteurPerso = 115;
                    //         ctx.clearRect(0, 120, largeurTotal, hauteurTotal - hauteurDirt - 10);
                    //         ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
                    //     }, 250)
                    //     setInterval(function () {
                        //         clearInterval(intervalDown);
                        //     }, 250)
                        // }