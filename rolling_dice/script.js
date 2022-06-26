let newgame = document.querySelector(".btn--new");
let roll = document.querySelector(".btn--roll");
let holdd = document.querySelector(".btn--hold");
let turn = true;
let acum = 0;
let score0 = 0;
let score1 = 0;
const reset = () => {
    document.getElementById("current--0").innerHTML = "0";
    document.getElementById("current--1").innerHTML = "0";
    document.getElementById("score--1").innerHTML = "0";
    document.getElementById("score--0").innerHTML = "0";
    acum = 0;
    score0 = 0;
    score1 = 0;
}
const rolldice = () => {
    let num = Math.floor(Math.random() * (7 - 1)) + 1;
    document.getElementById("dice").src = `dice-${num}.png`;
    if (num != 1) {
        acum += num;
        if (turn) {
            document.getElementById("current--0").innerHTML = acum;
        } else {
            document.getElementById("current--1").innerHTML = acum;
        }
    } else {
        if (turn) {
            document.getElementById("current--0").innerHTML = 0;
        } else {
            document.getElementById("current--1").innerHTML = 0;
        }
        turn = !turn;
        acum = 0;
    }
}
const hold = () => {
    if (turn) {
        score0 += acum;
        document.getElementById("score--0").innerHTML = score0;
        document.getElementById("current--0").innerHTML = 0;
        acum = 0;
        turn = !turn;
    } else {
        score1 += acum;
        document.getElementById("score--1").innerHTML = score1;
        document.getElementById("current--1").innerHTML = 0;
        acum = 0;
        turn = !turn;
    }
    if (score0 > 99) {
        alert("¡Felicidades jugador 1, has ganado!")
    }
    if (score1 > 99) {
        alert("¡Felicidades jugador 2, has ganado!")
    }
}
newgame.addEventListener("click", reset);
roll.addEventListener("click", rolldice);
holdd.addEventListener("click", hold);