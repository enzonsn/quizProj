var timerEl = document.querySelector("#timer");
var timeLeft = 60;
var timerInterval;

var startButton = document.querySelector("#startButton");
var viewHS = document.querySelector("#viewHS");
var aBtn = document.querySelector("#a");
var bBtn = document.querySelector("#b");
var cBtn = document.querySelector("#c");
var dBtn = document.querySelector("#d");
var submitButton = document.querySelector("#submit");
var retryButton = document.querySelector("#retry");
var clearButton = document.querySelector("#clear");

var startScreen = document.querySelector("#startScreen");

var questionScreen = document.querySelector("#questionSect");
var question = document.querySelector("#question");
var questionCheck = document.querySelector("#check");

var endScreen = document.querySelector("#endScreen");
var score = document.querySelector("#endScore");
var initials = document.querySelector("#input");
var scoreList = document.querySelector("#scoreList");
var scores = document.querySelector("#scores");
var home = document.querySelector("#home");

var highScores = [];
var storedHighScores = [];
var questionNum = 0;
var feedback;

var questions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answers: ["A) JavaScript variable names must begin with a letter or the underscore character.", 
                    "B) JavaScript variable names are case sensitive.",
                    "C) Both of the above.",
                    "D) None of the above."],
        correctAnswer: "C) Both of the above."
    },
    {
        question: "How can you get the total number of arguments passed to a function?",
        answers: ["A) Using args.length property.",
                    "B) Using arguments.length property.",
                    "C) Both of the above.",
                    "D) None of the above."],
        correctAnswer: "B) Using arguments.length property."
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: ["A) while()",
                    "B) loop()",
                    "C) forEach()",
                    "D) None of the above."],
        correctAnswer: "C) forEach()"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        answers: ["A) toLowerCase()", 
                    "B) toLower()", 
                    "C) changeCase(case)", 
                    "D) None of the above."],
        correctAnswer: "A) toLowerCase()"
    },
    {
        question: "Which of the following function of Number object returns the number's value?",
        answers: ["A) toString()", 
                    "B) valueOf()", 
                    "C) toLocaleString()", 
                    "D) toPrecision()"],
        correctAnswer: "B) valueOf()"
    },
    {
        question: "Which of the following function of String object extracts a section of a string and returns a new string?",
        answers: ["A) slice()", 
                    "B) split()", 
                    "C) replace()", 
                    "D) search()"],
        correctAnswer: "A) slice()"
    }
];

function start(){
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
    timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft + "s";
        if(timeLeft==0){
            clearInterval(timerInterval);
            final();
        }
    }, 1000);
    displayQuestion(questionNum);
}

function displayQuestion(){

    question.textContent = questions[questionNum].question;
    aBtn.textContent = questions[questionNum].answers[0];
    bBtn.textContent = questions[questionNum].answers[1];
    cBtn.textContent = questions[questionNum].answers[2];
    dBtn.textContent = questions[questionNum].answers[3];

    aBtn.onclick = function(event){
        checkAnswer(event);
    };
    bBtn.onclick = function(event){
        checkAnswer(event);
    };
    cBtn.onclick = function(event){
        checkAnswer(event);
    };
    dBtn.onclick = function(event){
        checkAnswer(event);
    };
}

function checkAnswer(event){
    feedback = event.target.textContent;
    event.preventDefault();

    questionCheck.style.display = "block";
    var p = document.createElement("p");
    questionCheck.appendChild(p);

    setTimeout(function (){
        p.style.display = "none";
    }, 1300);

    if(questions[questionNum].correctAnswer == feedback){
        timeLeft +=5;
        p.textContent = "Correct! " +  feedback;
    }
    else if(questions[questionNum].correctAnswer != feedback){
        timeLeft -= 10;
        p.textContent = "Incorrect! :(";
    }
    if(timeLeft<0){timeLeft=0; final();}
    if(questionNum < questions.length-1){questionNum++;}
    else{final();}
    setTimeout(displayQuestion,2000);
    displayQuestion(questionNum);
}

function final(){
    score.textContent = timeLeft;

    endScreen.style.display = "block";
    scores.style.display = "block";
    questionScreen.style.display = "none";
    clearInterval(timerInterval);
    getStorage();
}

function saveScore(){
    var user = initials.value.toUpperCase();
    highScores.push({initial: user, score: timeLeft});
    var list = document.createElement("li");
    list.textContent = user  + "                  " + timeLeft;
    scoreList.appendChild(list);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function getStorage(){
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if(storedHighScores != null){
        highScores = storedHighScores;
    }
    highScores = highScores.sort((a,b) =>{
        if(a.score < b.score){ return 1;}
        else{return -1;}
    });

    for(var i = 0; i  < highScores.length; i++){
        var list = document.createElement("li");
        list.textContent = highScores[i].initial  + "                  " + highScores[i].score;
        scoreList.appendChild(list);
    }
}

startButton.addEventListener("click", start)

submitButton.addEventListener("click", function(){
    saveScore();
})

retryButton.addEventListener("click", function(){
    location.reload();
    return false;
})

clearButton.addEventListener("click", function(){
    localStorage.clear();
    highScores.innerHTML = "";
    clearButton.innerHTML = "Scores Cleared!";
    setTimeout(function(){
        clearButton.textContent = "Clear Highscores";
    }, 1700);
})

viewHS.addEventListener("click", function(){
    console.log("click");
    startScreen.style.display = "none";
    questionScreen.style.display = "none";
    endScreen.style.display = "none";
    scores.style.display = "block";
    getStorage();
})

home.addEventListener("click",function(){
    location.reload();
    return false;
})
