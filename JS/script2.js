function playerStats(bowling, spin, pace, batting, facingSpin, facingPace){
    this.bowling = bowling;
    this.spin = spin;
    this.pace = pace;
    this.batting = batting;
    this.facingSpin = facingSpin;
    this.facingPace = facingPace;
}


var playerOne = new playerStats(50, 50, 60, 90, 60, 80 );
console.log(playerOne);
var playerTwo = new playerStats(60, 70, 80, 75, 70, 70);

var playerOneBowling = playerOne.bowling


function bowling(spin, pace){

}

function batting(facingSpin, facingPace){

}