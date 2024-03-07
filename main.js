import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

const GALERIA = document.getElementsByClassName("galeria")[0];


GALERIA.innerHTML = htmlOsszeAllit(KEPEK);


    const nagykepIMG = document.getElementById("nagykepImg");


    const NAGYKEP = document.getElementsByClassName("nagykep");



const kisKEPEK = document.querySelectorAll(".kep");

for (let index = 0; index < kisKEPEK.length; index++) {
    kisKEPEK[index].addEventListener("click", function(event) {
        nagykepIMG.src = event.target.src;
        /* console.log(event.target.src); */
        aktInd = index;
    });
}

const BAL = document.querySelector(".bal");
const JOBB = document.querySelector(".jobb");
let aktInd = 1;
function jobbra(){
    aktInd++;
    if (aktInd >= KEPEK.length) {
        aktInd = 0;
    }
    nagykepIMG.src = KEPEK[aktInd].kep;
}

JOBB.addEventListener("click", jobbra);

function balra(){
    aktInd--;
    if (aktInd >= KEPEK.length) {
        aktInd = 0;
    }
    nagykepIMG.src = KEPEK[aktInd].kep;
}

BAL.addEventListener("click", balra);