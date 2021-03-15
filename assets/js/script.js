var timerEl = document.querySelector("#timer");
var timeLeft = 60;

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

var highScores = [];
var storedHighScores = [];

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
    },
];

function start(){
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
}









startButton.addEventListener("click", start)

submitButton.addEventListener("click", function(){

})

retryButton.addEventListener("click", function(){

})

clearButton.addEventListener("click", function(){

})

viewHS.addEventListener("click", function(){

})
