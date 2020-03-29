var stroke = [ 0, 1, 2, "OUT", 0, 1, 2, "Wide", 0, 1, 2, 1, 2, 1, 2];
var loft = [0, 4, 6, "OUT", 0, 4, 6, "Wide", 4, 6, 3, 2, "OUT", 4, 6, "OUT"];

var playerScore = [];
console.log(playerScore)

var totalScore = 0 ;
var wickets = 0;


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
        playerScore.push(score);
        console.log("Wide");
    }else if (score === "OUT") {
        wickets++;
        document.getElementById('score-display').innerText = "OUT";
        console.log("OUT");
        console.log(wickets);
    }
    document.getElementById('score-board').innerText = totalScore + "/" + wickets
}

document.getElementById('stroke').addEventListener('click', playStroke);

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
        playerScore.push(score);
        console.log("Wide");
    }else if (score === "OUT") {
        wickets++;
        document.getElementById('score-display').innerText = "OUT";
        console.log("OUT")
        console.log(wickets);
    }
    document.getElementById('score-board').innerText = totalScore + "/" + wickets
}


document.getElementById('loft').addEventListener('click', playLoft);

document.getElementById('score-board').innerText = totalScore + "/" + wickets