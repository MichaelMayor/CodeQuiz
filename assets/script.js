var homeBtn = document.querySelector("#home-button");
var resetBtn = document.querySelector("#reset-button");
var startBtn = document.querySelector("#start-button");
var tbody = document.querySelector('#tbody');
var timer = document.querySelector('#timer');
var questionText = document.querySelector('#question-text');
var answers = document.querySelector('#answers');
var answer1 = document.querySelector('#ans1');
var answer2 = document.querySelector('#ans2');
var answer3 = document.querySelector('#ans3');
var answer4 = document.querySelector('#ans4');
var result = document.querySelector('#result');
var highscoreBtn = document.querySelector('#highscoreLink');
var initials = document.querySelector('#initials');




var totalSeconds = 60;
var secondsElapsed = 0;
var currentQ = 0;
var correctAnswer;
var interval;
var score;
var question1 = {"Question":"Question Text1","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question2 = {"Question":"Question Text2","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question3 = {"Question":"Question Text3","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question4 = {"Question":"Question Text4","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question5 = {"Question":"Question Text5","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question6 = {"Question":"Question Text6","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question7 = {"Question":"Question Text7","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question8 = {"Question":"Question Text8","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question9 = {"Question":"Question Text9","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var question10 = {"Question":"Question Text10","Answers": ["Answer1","Answer2","Answer3","Answer4"], "Correct":1};
var questions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]


function startTimer() {
  interval = setInterval(function(){
    var secondsRemaining = totalSeconds - secondsElapsed; 
    timer.textContent = secondsRemaining;
    secondsElapsed++;
    if (secondsRemaining == 0) {
        quizEnd();
    }
}, 1000)}

function quizSet(currentQ){
    questionText.textContent = questions[currentQ].Question;
    answer1.textContent = "1: " + questions[currentQ].Answers[0];
    answer2.textContent = "2: " + questions[currentQ].Answers[1];
    answer3.textContent = "3: " + questions[currentQ].Answers[2];
    answer4.textContent = "4: " + questions[currentQ].Answers[3];
    return questions[currentQ].Correct


}

function quizStart(){
    startTimer();
    correctAnswer = quizSet(currentQ);
}

function answerQuestion(){
    if(event.target.matches("button")) {
        currentAns = parseInt(event.target.id[3]);
        if (currentAns == correctAnswer){
            result.textContent = "Correct!"
            score = score + 10;
        }
        else {
            result.textContent = "Incorrect!";
            secondsElapsed = secondsElapsed + 5;
        }
        currentQ++;
        if (currentQ<questions.length) {
        quizSet(currentQ);}
        else {
            quizEnd();
        }
      }
}

function quizEnd(){
    
}
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

function setNewScore(){}



homeBtn.addEventListener("click", goHome);
startBtn.addEventListener("click", quizStart);

initials.addEventListener("submit", setNewScore);
resetBtn.addEventListener("click", resetScores);
answers.addEventListener("click", answerQuestion);
highscoreBtn.addEventListener("click", goHighscores);