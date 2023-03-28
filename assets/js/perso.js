let imgPerso = new Image();
imgPerso.src = 'assets/img/perso.png';

let jumpDuration = 350;

function drawPerso() {
    ctx.drawImage(imgPerso, Posx, Posy, largeurPerso, hauteurPerso);
}

function getDirection(e) {
    switch (e.key) {
        case "ArrowRight":
            xSpeed = distance;
            break;
        case "ArrowLeft":
            xSpeed = -distance;
            break;
        case "ArrowUp":
            jump();
            break;
    }
}

function addSpeed() {
    if (xSpeed >= 0) {
        if (Posx + xSpeed <= (largeurTotal - largeurPerso)) {
            Posx += xSpeed;
        }
    } else {
        if (Posx - xSpeed >= 0) {
            Posx += xSpeed;
        }
    }
    Posy += ySpeed;
}

function jump() {
    if (!isJumping) {
        isJumping = true;
        ySpeed = -distance;
        setTimeout(() => {
            ySpeed = distance;
            setTimeout(() => {
                ySpeed = 0;
                isJumping = false;
            }, jumpDuration)
        }, jumpDuration);
    }
}