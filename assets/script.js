var homeBtn = document.getElementById("#home-button");
var resetBtn = document.getElementById("#reset-button");
var startBtn = document.getElementById("#start-button");
var tbody = document.getElementById('#tbody');
var timer = document.getElementById('#timer');
var question = document.getElementById('#question-text');
var answers = document.getElementById('#answers');
var result = document.getElementById('#result');
var highscoreBtn = document.getElementById('#highscoreLink')


var questions = 0;
var totalSeconds = 60;
var secondsElapsed = 0;
var interval;


function startTimer() {
  // Write code to start the timer here
  
  interval = setInterval(function(){
    var secondsRemaining = totalSeconds - secondsElapsed; 
    timer.textContent = secondsRemaining
    secondsElapsed++;
    if (secondsRemaining == 0) {clearInterval(interval)}
}, 1000)}

function quizSet(){}

function quizBegin(){}

function answerQuestion(){}

function writeHighscores(){
    for (var i = 0; i < obj.length; i++) {
    var tr = "<tr>";

    /* Verification to add the last decimal 0 */
    if (obj[i].value.toString().substring(obj[i].value.toString().indexOf('.'), obj[i].value.toString().length) < 2) 
        obj[i].value += "0";

    /* Must not forget the $ sign */
    tr += "<td>" + obj[i].key + "</td>" + "<td>$" + obj[i].value.toString() + "</td></tr>";

    /* We add the table row to the table body */
    tbody.innerHTML += tr;
}}

function resetScores(){}

function goHome(){}

function goHighscores(){}



homeBtn.addEventListener("click", goHome)

startBtn.addEventListener("click", quizBegin);
resetBtn.addEventListener("click", resetScores);
answers.addEventListener("click", answerQuestion);
highscoreBtn.addEventListener("click", goHighscores);