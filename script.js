//score array
var stroke = [ 0, 1, 2, "OUT", 0, 1, 2, "Wide", 0, 1, 2, 1, 2, 1, 2];
var loft = [0, 4, 6, "OUT", 0, 4, 6, "Wide", 4, 6, 3, 2, "OUT", 4, 6, "OUT"];
//user inputs
var noOfPlayers = document.getElementById('noOfPlayers');
var noOfWickets = document.getElementById('noOfWickets');
var noOfOvers = document.getElementById('noOfOvers');

var totalScore = 0 ;
var fallOfWicket = 0;
var wicketsAvailable;

var playerScore =[];
console.log(playerScore);


//Play the game until these things happen
//Player runs out of selected number of wickets
//player runs out of selected number of overs
//Start the game when number of players, wickets and overs are declared

var gameFormat = function(){
    var playerSelection = noOfPlayers.options[noOfPlayers.selectedIndex].value;
    console.log(playerSelection);
    wicketsAvailable = noOfWickets.options[noOfWickets.selectedIndex].value;
    console.log(wicketsAvailable);
    var oversAvailable = noOfOvers.options[noOfOvers.selectedIndex].value;
    console.log(oversAvailable);

    gamePlay();
}





var gamePlay = function(){
    var playStroke = function(){
    var score = stroke[Math.floor(Math.random()*stroke.length)];
    if( score !== "OUT" && score !== "Wide"){
        parseInt(score);
        totalScore += score;
        playerScore.push(score);
        document.getElementById('score-display').innerText = score;
        console.log(score);
        console.log(totalScore);
    }if (score === "Wide") {
        score = 1;
        totalScore += score;
        playerScore.push(score);
        console.log("Wide");
    }if (score === "OUT") {
        fallOfWicket++;
        document.getElementById('score-display').innerText = "OUT";
        console.log("OUT");
        console.log(fallenWickets);
    }if (fallOfWicket == wicketsAvailable){
        document.getElementById('stroke').disabled = true;
        document.getElementById('loft').disabled = true;
    }
    document.getElementById('score-board').innerText = totalScore + "/" + fallOfWicket
}

    var playLoft = function(){
    var score = loft[Math.floor(Math.random()*loft.length)];
    if( score !== "OUT" && score !== "Wide"){
        parseInt(score);
        totalScore += score;
        playerScore.push(score);
        document.getElementById('score-display').innerText = score;
        console.log(score);
        console.log(totalScore);
    }if (score === "Wide") {
        score = 1;
        totalScore += score;
        playerScore.push(score);
        console.log("Wide");
    }if (score === "OUT") {
        fallOfWicket++;
        document.getElementById('score-display').innerText = "OUT";
        console.log("OUT")
        console.log(fallOfWicket);
    }if (fallOfWicket == wicketsAvailable){
        document.getElementById('stroke').disabled = true;
        document.getElementById('loft').disabled = true;
    }
        document.getElementById('score-board').innerText = totalScore + "/" + fallOfWicket
}

document.getElementById('stroke').addEventListener('click', playStroke);
document.getElementById('loft').addEventListener('click', playLoft);

}

document.getElementById('selection-ok').addEventListener('click', gameFormat);