const leaderboard = document.querySelector(".highscoreList");
const retryBtn = document.querySelector(".retry");
const clearBtn = document.querySelector(".clearScore");



let highscoresList = JSON.parse(localStorage.getItem("highscoresList")) || [];