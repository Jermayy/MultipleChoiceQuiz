const startButton = document.querySelector("#startbtn");
const startContainer = document.querySelector(".quizContainer");
const quizContainer = document.querySelector(".quizQuestionContainer")
const questionText = document.querySelector(".questionText");
const optionBox = document.querySelector(".optionBox");
const feedbackContainer = document.querySelector(".feedbackContainer");
const feedbackText = document.querySelector(".answerFeedback");
const inputContainer = document.querySelector(".inputContainer");

let questionIndex = 0;
let wrongCounter = 0;



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

startButton.addEventListener('click', load);


function load() {
    console.log('testing load');
    if (questionIndex < 5) {


        questionText.innerHTML = questions[questionIndex].question;
        startContainer.classList.add('hide');
        quizContainer.classList.remove('hide');
        createOptions();

    } else {
        showHighscoreInput();
    }

};



function createOptions() {



    for (let i = 0; i < questions[questionIndex].options.length; i++) {
        const option = document.createElement('button');
        option.innerText = questions[questionIndex].options[i];
        option.classList.add('btn');
        option.classList.add('option');
        option.id = i;
        option.setAttribute("onclick", "check(this)");
        optionBox.appendChild(option);
    }
}

function check(element) {
    console.log(element.innerText);
    const id = element.id;



    if (id == questions[questionIndex].answer) {
        console.log('correct')
        element.classList.add("correct");
        feedbackText.textContent = "Correct!"
        feedbackContainer.classList.remove("hide")
        console.log(wrongCounter);
        resetState();
        setNextQuestion();
    } else {
        console.log('wrong');
        element.classList.add("wrong");
        feedbackText.textContent = "Wrong!"
        feedbackContainer.classList.remove("hide")
        wrongCounter++;
        console.log(wrongCounter);
        resetState();
        setNextQuestion();
    }



}


function resetState() {
    console.log('reset');
    while (optionBox.firstChild) {
        optionBox.removeChild(optionBox.firstChild)
    }
}


function setNextQuestion() {
    console.log("hi");
    questionIndex++;
    load();
}


function showHighscoreInput() {
    console.log('testHighscore');
    quizContainer.classList.add('hide');
    feedbackContainer.classList.add('hide');
    inputContainer.classList.remove('hide');
}









//  1.When user opens quiz app
//     - Load start button and text '1 minute to answer all questions'
// 2.When user clicks start button
//     - load first question in array 
//     - loan question options 
//     - start timer (60 seconds)
// 3. when user clicks an answer option
//     - check if answer is correct and display 'correct' or 'wrong'
//     - if answer is WRONG: add to counter for point deduction at end of quiz
//     - load next question

//  4. When user answers final question:
//     - show if answer is correct or Not
//     - deduct any points from remaining time left to calculate score
//     - display score to user and display input for user to add name

//  5. when user enters name
//     - Load scoreboard.html with previous highscores and names in descending order of scores