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
}

function startOver() {
    let newGame = document.getElementById("new-game");
    if(newGame) {
        homeScore.textContent = 0;
        guestScore.textContent = 0;
    }
}

function winnerColor(){
    if(homeScore > guestScore){
       let home = document.getElementById("home-score").fontcolor("#fcd34d")
       return home; 
       console.log(home);
    }
    if (guestScore > homeScore) {
       let guest = document.getElementById("guest-score").fontcolor("#fcd34d");
       return guest;
    }
}

winnerColor();