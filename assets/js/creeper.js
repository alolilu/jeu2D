function make_creeper() {
    imgCreeper = new Image();
    imgCreeper.src = 'assets/img/creeper.png';
    imgCreeper.onload = function () {
        moveCreeper();
    }
}

function moveCreeper() {
    addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            let intervalCreeper = setInterval(() => {
                PosXcreeper -= distance;
                // ctx.clearRect(600, 600, 200, 200);
                // ctx.clearRect(-600, -323, hauteurPersoCreeper, largeurPersoCreeper)
                ctx.drawImage(imgCreeper, PosXcreeper, PosYcreeper, largeurPersoCreeper, hauteurPersoCreeper);
                //ctx.clearRect(imgCreeper, PosXcreeper , PosYcreeper, largeurPersoCreeper+1, hauteurPersoCreeper+1);
            }, 10);
        };
    });
};

// setInterval(moveCreeper, 1);

// for (let pas = 0; pas < 5; pas++) {
//     // Ceci sera exécuté 5 fois
//     // À chaque éxécution, la variable "pas" augmentera de 1
//     // Lorsque'elle sera arrivée à 5, le boucle se terminera.
//     console.log('Faire ' + pas + ' pas vers l\'est');
//   }



