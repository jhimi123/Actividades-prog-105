let newgame = document.querySelector(".btn--new");
let roll = document.querySelector(".btn--roll");
let holdd = document.querySelector(".btn--hold");
let turn = true;
let acum = 0;
let score0 = 0;
let score1 = 0;
let winner1 = false;
let winner2 = false;

const reset = () => {
    document.getElementById("current--0").innerHTML = "0";
    document.getElementById("current--1").innerHTML = "0";
    document.getElementById("score--1").innerHTML = "0";
    document.getElementById("score--0").innerHTML = "0";
    acum = 0;
    score0 = 0;
    score1 = 0;
    if (winner1) {
        document.querySelector(".player--0").classList.remove("player--winner");
        winner1 = false;
    } else {
        document.querySelector(".player--1").classList.remove("player--winner");
        winner2 = false;
    }
}
const rolldice = () => {
    let num = Math.floor(Math.random() * (7 - 1)) + 1;
    document.getElementById("dice").src = `dice-${num}.png`;
    if (num != 1) {
        acum += num;
        if (turn) {
            document.querySelector(".player--0").classList.add("player--active")
            document.getElementById("current--0").innerHTML = acum;
        } else {
            document.getElementById("current--1").innerHTML = acum;
            document.querySelector(".player--1").classList.add("player--active")
        }
    } else {
        if (turn) {
            document.querySelector(".player--0").classList.remove("player--active")
            document.getElementById("current--0").innerHTML = 0;
        } else {
            document.querySelector(".player--1").classList.remove("player--active")
            document.getElementById("current--1").innerHTML = 0;
        }
        turn = !turn;
        acum = 0;
    }
}
const hold = () => {
    if (turn) {
        score0 += acum;
        document.querySelector(".player--0").classList.remove("player--active"),
        document.getElementById("score--0").innerHTML = score0;
        document.getElementById("current--0").innerHTML = 0;
        acum = 0;
        turn = !turn;
    } else {
        score1 += acum;
        document.querySelector(".player--1").classList.remove("player--active"),
        document.getElementById("score--1").innerHTML = score1;
        document.getElementById("current--1").innerHTML = 0;
        acum = 0;
        turn = !turn;
    }
    if (score0 > 20) {
        document.querySelector(".player--0").classList.add("player--winner"), 
        winner1=true;
        setbuttons();
        alert("¡Felicidades jugador 1, has ganado!")
    }
    if (score1 > 20) {
        winner2=false;
        setbuttons();
        document.querySelector(".player--0").classList.add("player--winner"), 
        alert("¡Felicidades jugador 2, has ganado!")
    }
}

const setbuttons = () => {
    if(document.querySelector(".btn--roll").classList.contains("hidden") && document.querySelector(".btn--roll").classList.contains("hidden")){
        document.querySelector(".btn--roll").classList.remove("hidden");
        document.querySelector(".btn--hold").classList.remove("hidden");
    } else {
        document.querySelector(".btn--roll").classList.add("hidden");
        document.querySelector(".btn--hold").classList.add("hidden");
    }
}
newgame.addEventListener("click", reset);
roll.addEventListener("click", rolldice);
holdd.addEventListener("click", hold);