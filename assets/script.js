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
var form = document.querySelector('#form');
var initials = document.querySelector('#initials');
var finalScore = document.querySelector('#score')



var totalSeconds = 60;
var secondsElapsed = 1;
var currentQ = 0;
var correctAnswer;
var interval;
var score = 0;
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
var highScores =[];


function startTimer() {
  interval = setInterval(function(){
    var secondsRemaining = totalSeconds - secondsElapsed; 
    secondsElapsed++;
    timer.textContent = secondsRemaining;
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
    score = 0;
    currentQ = 0;
    secondsElapsed = 1;
    correctAnswer = quizSet(currentQ);
}

function answerQuestion(){
    if(event.target.matches("button")) {
        currentAns = parseInt(event.target.id[3]);
        if (currentAns == correctAnswer){
            result.textContent = "Correct!"
            score += 10;
        }
        else {
            result.textContent = "Incorrect!";
            secondsElapsed += 5;
        }
        currentQ++;
        if (currentQ < questions.length) {
        quizSet(currentQ);}
        else {
            quizEnd();
        }
      }
}

function quizEnd(){
    score += (totalSeconds-secondsElapsed);
    clearInterval(interval);
    finalScore.textContent = score; 
}

function writeHighscores(){
    
    sortedhighScores= Object.entries(highScores).sort((a,b)=>b[1]-a[1]);
    console.log(sortedhighScores);
    tbody.innerHTML = null;
    for (var i = 0; i < sortedhighScores.length; i++) {
    var tr = "<tr>";
        var place = i+1
    tr += "<td>"+ place.toString() +"<td>" + sortedhighScores[i][0] + "</td>" + "<td>" + sortedhighScores[i][1].toString() + "</td></tr>";

    tbody.innerHTML += tr;
}}

function resetScores(){
    highScores = [];
    writeHighscores();
}

function goHome(){}

function goHighscores(){
    writeHighscores()
}

function setNewScore(event){
    event.preventDefault();
    highScores[initials.value]= score;
    goHighscores();
    
}



homeBtn.addEventListener("click", goHome);
startBtn.addEventListener("click", quizStart);
form.addEventListener("submit", setNewScore);
resetBtn.addEventListener("click", resetScores);
answers.addEventListener("click", answerQuestion);
highscoreBtn.addEventListener("click", goHighscores);