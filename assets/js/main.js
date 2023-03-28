var canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let hauteurDirt = 220;
let largeurDirt = 700;
let distance = 3;
var hauteurTotal = 500;
let largeurTotal = 700;
let saut = 8;
let grandSaut = 100;
let Posy = 287;
let Posx = 0;
let hauteurPerso = 115;
let largeurPerso = 100;
let persoCoucher = 60;
let largeurSoleil = 130;
let hauteurSoleil = 100;
let largeurNuage = 300;
let hauteurNuage = 100;
let hauteurPersoCreeper = 70;
let largeurPersoCreeper = 60;
let PosXcreeper = 600;
let PosYcreeper = 323;

canvas.setAttribute("height", hauteurTotal + "px");
canvas.setAttribute("width", largeurTotal + "px");

make_sun();
make_nuage();
make_dirt();
make_perso();
make_creeper();