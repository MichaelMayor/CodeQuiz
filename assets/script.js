// Grab all the elements
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


// Set neccesary variables
var totalSeconds = 60;
var secondsElapsed = 1;
var currentQ = 0;
var correctAnswer;
var interval;
var score = 0;
// set questions, answer options, and correct answers
var question1 = {"Question":"Select the correct HTML option to create an e-mail link","Answers": ["Mail>xxx@yyy.com/mail","Mail href=\"xxx@yyy.com\"","A href=mailto:xxx@yyy.com","A href=\"xxx@yyy.com\""], "Correct":3};
var question2 = {"Question":"Select the appropriate HTML tag used for the largest heading","Answers": ["h6","head","heading","h1"], "Correct":4};
var question3 = {"Question":"Select the appropriate HTML tag for inserting a line break","Answers": ["br","break","brbr","lb"], "Correct":1};
var question4 = {"Question":"In CSS,select the property used to set the background color of an image?","Answers": ["Color:background","color","background:color","background-color"], "Correct":4};
var question5 = {"Question":"Which of the following function of a string object returns the character at the specified index?","Answers": ["charAt()","charCodeAt()","concat()","indexOf()"], "Correct":1};
var question6 = {"Question":"How do you write an IF statement in Javascript","Answers": ["if i=5 then","if (i=5) then","if i=5","if (i=5)"], "Correct":4};
var question7 = {"Question":"Choose the correct JavaScript syntax to change the content of the HTML code: <p id=\"words\"> LoremIpsum </p>","Answers": ["document.getElement(\"words\").innerHTML=\"different words\";","document.getElementbyId(\"words\").innerHTML=\"different words\";","document.getId(\"words\").innerHTML=\"different words\";","document.getElementbyId(\"words\").innerHTML=different words;"], "Correct":2};
var question8 = {"Question":"What is the correct syntax for referring to an external script called “script.js”?","Answers": ["<script src=\"script.js\">","<script href=\"script.js\">","<script ref=\"script.js\">","<script name=\"script.js\">"], "Correct":1};
var question9 = {"Question":"What is the function of an array that runs through each element of the array","Answers": ["forEach()","filter()","every()","concat()"], "Correct":1};
var question10 = {"Question":"Which of these is NOT a commonly used data type","Answers": ["String","Boolean","Alert","Number"], "Correct":3};
var questions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];
// get the highscore variable from local storage
var highScores= JSON.parse(localStorage.getItem("highScores"));





// function to start the timer and end the quiz when time runs out
function startTimer() {
  interval = setInterval(function(){
    var secondsRemaining = totalSeconds - secondsElapsed; 
    secondsElapsed++;
    timer.textContent = secondsRemaining;
    if (secondsRemaining == 0) {
        quizEnd();
    }
}, 1000)}

//Sets up the current question and answers
function quizSet(currentQ){
    questionText.textContent = questions[currentQ].Question;
    answer1.textContent = "1: " + questions[currentQ].Answers[0];
    answer2.textContent = "2: " + questions[currentQ].Answers[1];
    answer3.textContent = "3: " + questions[currentQ].Answers[2];
    answer4.textContent = "4: " + questions[currentQ].Answers[3];
    return questions[currentQ].Correct
}

// Initializes the quiz
function quizStart(){
    startTimer();
    score = 0;
    currentQ = 0;
    secondsElapsed = 1;
    correctAnswer = quizSet(currentQ);
    document.getElementById("home").style.display = "none";
    document.getElementById("highscores").style.display = "none";
    document.getElementById("newscore").style.display = "none";
    document.getElementById("questions").style. display = "block";
}

// checks the users answer against the correct answer, adjusts score accordingly, and then queues up the next question
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
        correctAnswer = quizSet(currentQ);}
        else {
            quizEnd();
        }
        document.getElementById("result").style.display = "block";
      }
}

//ends the timer and takes the user to the end of quiz screen
function quizEnd(){
    score += (totalSeconds-secondsElapsed);
    clearInterval(interval);
    finalScore.textContent = score;
    document.getElementById("home").style.display = "none";
    document.getElementById("highscores").style.display = "none";
    document.getElementById("newscore").style.display = "block";
    document.getElementById("questions").style.display = "none"; 
    document.getElementById("result").style.display = "none"; 
}

//sorts the scores from highest to lowest, then writes the top ten high scores to the highscore table, then writes the scores to the local storage
function writeHighscores(){
    sortedhighScores= Object.entries(highScores).sort((a,b)=>b[1]-a[1]);
    tbody.innerHTML = null;
    for (var i = 0; i < 10; i++) {
    var tr = "<tr>";
        var place = i+1
    tr += "<td>"+ place.toString() +"<td>" + sortedhighScores[i][0] + "</td>" + "<td>" + sortedhighScores[i][1].toString() + "</td></tr>";

    tbody.innerHTML += tr;
    localStorage.setItem("highScores", JSON.stringify(highScores))
}}

//resets the scores on the table and in the local storage
function resetScores(){
    highScores = {};
    localStorage.setItem("highScores", JSON.stringify(highScores))
    writeHighscores();
}

//brings the user back to the home page state
function goHome(){
    document.getElementById("home").style.display = "block";
    document.getElementById("highscores").style.display = "none";
    document.getElementById("newscore").style.display = "none";
    document.getElementById("questions").style.display = "none"; 
    timer.textContent = totalSeconds;
}

//brings the user to the highscore page and populates the table
function goHighscores(){
    
    document.getElementById("home").style.display = "none";
    document.getElementById("highscores").style.display = "block";
    document.getElementById("newscore").style.display = "none";
    document.getElementById("questions").style.display = "none"; 
    writeHighscores()
}

//adds the users score to the high scores
function setNewScore(event){
    event.preventDefault();
    if (highScores==null) {highScores = {};}
    highScores[initials.value]= score;
    goHighscores();   
}



homeBtn.addEventListener("click", goHome);
startBtn.addEventListener("click", quizStart);
form.addEventListener("submit", setNewScore);
resetBtn.addEventListener("click", resetScores);
answers.addEventListener("click", answerQuestion);
highscoreBtn.addEventListener("click", goHighscores);