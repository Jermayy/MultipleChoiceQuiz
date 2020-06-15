const startButton = document.querySelector("#startbtn");
const startContainer = document.querySelector(".quizContainer");
const quizContainer = document.querySelector(".quizQuestionContainer")
const questionText = document.querySelector(".questionText");
const optionBox = document.querySelector(".optionBox");
const feedbackContainer = document.querySelector(".feedbackContainer");
const feedbackText = document.querySelector(".answerFeedback");
const inputContainer = document.querySelector(".inputContainer");
const timer = document.querySelector(".remainingTime");
const score = document.querySelector(".score");
const userName = document.querySelector(".userName");
const submitButton = document.querySelector(".submitBtn");

let questionIndex = 0;
let timeLeft = 60;
let currentScore = "";
let highscoresList = JSON.parse(localStorage.getItem("highscoresList")) || [];

const questions = [{
        question: "Commonly used data types DO NOT include:",
        options: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        answer: 2
    },

    {
        question: "The condition in an if/else statement is enclosed within ____.",
        options: ['Quotes', 'Curly brackets', 'Parentheses', 'Square brackets'],
        answer: 2
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        options: ['Numbers and strings', 'Other arrays', 'Booleans', 'all of the above', ],
        answer: 3
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        options: ['commas', 'curly brackets', 'quotes', 'Parentheses', ],
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ['Javascript', 'terminal/bash', 'for loops', 'console.log', ],
        answer: 1
    },
]
console.log(questions);

window.onload = () => {
    loadStart();
}

function loadStart() {

    quizContainer.classList.add('hide');
    feedbackContainer.classList.add('hide');
    inputContainer.classList.add('hide');
}

startButton.addEventListener('click', startQuiz);

function load() {
    if (questionIndex < 5) {

        questionText.innerHTML = questions[questionIndex].question;
        startContainer.classList.add('hide');
        quizContainer.classList.remove('hide');
        createOptions();

    } else {
        showHighscoreInput();

    }

};

function startTimer() {

    timeInterval = setInterval(function() {
        timer.textContent = timeLeft;
        timeLeft--;

        if (timer.textContent == 0) {
            clearInterval(timeInterval);
            showHighscoreInput()
        }

        if (questionIndex > 4) {
            clearInterval(timeInterval);
            showHighscoreInput()
        }

    }, 1000);
}

function startQuiz() {
    startTimer();

    questionText.innerHTML = questions[questionIndex].question;
    startContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    createOptions();
}

function createOptions() {

    for (let i = 0; i < questions[questionIndex].options.length; i++) {
        const option = document.createElement('button');
        option.innerText = questions[questionIndex].options[i + 1];
        option.classList.add('btn');
        option.classList.add('option');
        option.id = i;
        option.setAttribute("onclick", "check(this)");
        optionBox.appendChild(option);
    }
}

function check(element) {
    const id = element.id;

    if (id == questions[questionIndex].answer) {
        console.log('correct')
        element.classList.add("correct");
        feedbackText.textContent = "Correct!"
        feedbackContainer.classList.remove("hide")


        resetState();
        setNextQuestion();
    } else {
        console.log('wrong');
        element.classList.add("wrong");
        timeLeft = timeLeft - 5
        timer.textContent = timeLeft
        feedbackText.textContent = "Wrong!"
        feedbackContainer.classList.remove("hide")
        resetState();
        setNextQuestion();
    }
}

function resetState() {
    while (optionBox.firstChild) {
        optionBox.removeChild(optionBox.firstChild)
    }
}


function setNextQuestion() {
    questionIndex++;
    load();
}


function showHighscoreInput() {
    currentScore = timer.textContent;
    console.log(currentScore);
    quizContainer.classList.add('hide');
    feedbackContainer.classList.add('hide');
    inputContainer.classList.remove('hide');

    if (timeLeft > 0) {
        score.textContent = "you scored: " + currentScore;
        return currentScore;
    } else if (timeLeft <= 0) {
        score.textContent = "you scored: 0";
        currentScore = "0";
        return currentScore;
    }
}


submitButton.addEventListener('click', function(event) {
    event.preventDefault

    let currentUserName = userName.value.trim();

    if (currentUserName === "") {
        return;
    }

    let highscore = {
        Name: currentUserName,
        Score: currentScore
    };

    console.log(highscore);

    highscoresList.push(highscore);


    localStorage.setItem("highscoresList", JSON.stringify(highscoresList));
    window.location.href = "highscore.html";
});









//  1.When user opens quiz app
//     - Load start button and text '1 minute to answer all questions'
// 2.When user clicks start button
//     - load first question in array 
//     - loan question options 
//     - start timer (60 seconds)
// 3. when user clicks an answer option
//     - check if answer is correct and display 'correct' or 'wrong'
//     - if answer is WRONG: deduct 5 seconds from counter

//  4. When user answers final question:
//     - show if answer is correct or Not
//     - display score to user and display input for user to add name
//     - if timeLeft = 0 or less display less and user's final score = 0 

//  5. when user enters name
//     - Load scoreboard.html with previous highscores and names in descending order of scores