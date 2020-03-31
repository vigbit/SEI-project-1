//score array
var stroke = [ 0, 1, 2, "OUT", 0, 1, 2, "Wide", 0, 1, 2, 1, 2, 1, 2];
var loft = [0, 4, 6, "OUT", 0, 4, 6, "Wide", 4, 6, 3, 2, "OUT", 4, 6, "OUT"];
//user inputs
var noOfPlayers = document.getElementById('noOfPlayers');
var noOfWickets = document.getElementById('noOfWickets');
var noOfOvers = document.getElementById('noOfOvers');

var totalScore = 0 ;
var fallOfWicket = 0;
var ballsRemaining = 0;
var wicketsAvailable;
var oversAvailable;
var ballsAvailable;

var playerScore = [];
console.log(playerScore);

var playerOne = document.getElementById('playerOne').innerText;
//var playerTwo = document.getElementById('playerTwo').innerText;;
var currentPlayer = playerOne;
var playerOneScore = 0;
var playerTwoScore = 0;
var targetScore = [Math.floor(Math.random()*(8-5)+5)*10]
var remainingBalls;
var playerSelection;
var playerTracker;
var endGame = function(){
    if (totalScore > targetScore){
        alert ("YOU WIN!");
    }else{
        alert ("You lose!");
    }
}

//Play the game until these things happen
//Player runs out of selected number of wickets
//player runs out of selected number of overs
//Start the game when number of players, wickets and overs are declared
/*Five x five will be a game against the computer
Five wickets, five overs, five players
Opening screen, instructions: score as much you can before you
run out of wicket or overs. and let's play button
Let's play brings us to game screen
First game screen allows us to pick 5 players from 10 and name your team
Second screen in the play area
Scorecard in the middle
Player must bowl and bat
Can introduce toss system later
*/

/*function playerRating(batting, bowling, image) {
    this.batting = batting;
    this.bowling = bowling;
    this.image = image;
}*/


var gameFormat = function(){
    //playerSelection = noOfPlayers.options[noOfPlayers.selectedIndex].value;
    //console.log(playerSelection);
    wicketsAvailable = noOfWickets.options[noOfWickets.selectedIndex].value;
    //console.log(wicketsAvailable);
    oversAvailable = noOfOvers.options[noOfOvers.selectedIndex].value;
    //console.log(oversAvailable);

    gamePlay();

    }


var gamePlay = function(){
    document.getElementById('target-score').innerText = "Your score to beat is " + targetScore;

    ballsAvailable = oversAvailable * 6
    var playStroke = function(){
    var score = stroke[Math.floor(Math.random()*stroke.length)];
    if( score !== "OUT" && score !== "Wide"){
        parseInt(score);
        totalScore += score;
        ballsRemaining ++;
        playerScore.push(score);
        document.getElementById('score-display').innerText = score;
        console.log(score);
        console.log(totalScore);
    }if (score === "Wide") {
        score = 1;
        totalScore += score;
        ballsRemaining ++;
        playerScore.push(score);
        console.log("Wide");
    }if (score === "OUT") {
        fallOfWicket++;
        document.getElementById('score-display').innerText = "OUT";
        console.log("OUT");
        ballsRemaining ++;
        console.log(fallOfWicket);
    }if (fallOfWicket == wicketsAvailable || ballsRemaining == ballsAvailable){
        document.getElementById('stroke').disabled = true;
        document.getElementById('loft').disabled = true;
        endGame();
    }

    document.getElementById('score-board').innerText = totalScore + "/" + fallOfWicket + " balls left:" +  (ballsAvailable - ballsRemaining);
}

//Make it for every two wickets, the chances of losing wickets gets higher when you loft
    var playLoft = function(){

    var score = loft[Math.floor(Math.random()*loft.length)];
    if( score !== "OUT" && score !== "Wide"){
        parseInt(score);
        totalScore += score;
        ballsRemaining ++;
        playerScore.push(score);
        document.getElementById('score-display').innerText = score;
        console.log(score);
        console.log(totalScore);
    }if (score === "Wide") {
        score = 1;
        totalScore += score;
        ballsRemaining ++;
        playerScore.push(score);
        console.log("Wide");
    }if (score === "OUT") {
        fallOfWicket++;
        ballsRemaining ++;
        //batsmanSwitch;
        document.getElementById('score-display').innerText = "OUT";
        console.log("OUT")
        console.log(fallOfWicket);
    }if (fallOfWicket == wicketsAvailable || ballsRemaining == ballsAvailable){
        document.getElementById('stroke').disabled = true;
        document.getElementById('loft').disabled = true;
        endGame()
    }

    document.getElementById('score-board').innerText = totalScore + "/" + fallOfWicket + " balls left:" +  (ballsAvailable - ballsRemaining);

    }

document.getElementById('stroke').addEventListener('click', playStroke);
document.getElementById('loft').addEventListener('click', playLoft);


}

document.getElementById('selection-ok').addEventListener('click', gameFormat);