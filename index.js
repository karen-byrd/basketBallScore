let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTotal = 0;
let guestTotal = 0;

function hadd1() {
        homeTotal += 1;
        homeScore.textContent = homeTotal;
}

function hadd2() {
    homeTotal += 2;
    homeScore.textContent = homeTotal;
}

function hadd3() {
    homeTotal += 3;
    homeScore.textContent = homeTotal;
}

function gadd1() {
    guestTotal += 1;
    guestScore.textContent = guestTotal;
}

function gadd2() {
    guestTotal += 2;
    guestScore.textContent = guestTotal;
}

function gadd3() {
    guestTotal += 3;
    guestScore.textContent = guestTotal;
}



function startOver() {
    let newGame = document.getElementById("new-game");
    if(newGame) {
        guestScore.textContent = 0;
        homeScore.textContent = 0;
    }
}

function winnerColor(){
    let Color = getElementById("home-score");
    let color = getElementById("guest-score");
    let color1 = Color.style.color = "#fcd34d";
    let color2 = color.style.backgroundColor = "#fcd34d";
    if(homeScore > guestScore){
        homeScore.textContent = color1;
    } else if (guestScore > homeScore) {
        guestScore.textContent = color2;
    } else {
        null;
    }
}