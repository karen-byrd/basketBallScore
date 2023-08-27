let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTotal = 0;
let guestTotal = 0;

function add(amount, team){
    if(team === "home"){
        homeTotal += amount;
        homeScore.textContent = homeTotal;
    } 

    if(team === "guest") {
        guestTotal += amount;
        guestScore.textContent = guestTotal;
    }

    winningColor();
}

function startOver() {
    let newGame = document.getElementById("new-game");
    if(newGame) {
        homeScore.innerHTML = 0;
        console.log(homeScore);
        guestScore.innerHTML = 0;
        console.log(guestScore);
        newGame = 0;
    }
}

function winnerColor(){
    let Color = getElementById("home-score");
    let color = getElementById("guest-score");
    let color1 = Color.style.color = "#fcd34d";
    let color2 = color.style.backgroundColor = "#fcd34d";
    if(homeScore > guestScore){
        homeScore.textContent = color1;
    }
    if (guestScore > homeScore) {
        guestScore.textContent = color2;
    }
}