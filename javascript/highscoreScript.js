const leaderboard = document.querySelector(".highscoreList");
const retryBtn = document.querySelector(".retry");
const clearBtn = document.querySelector(".clearScore");



let highscoresList = JSON.parse(localStorage.getItem("highscoresList")) || [];

renderLeaderboard();


function renderLeaderboard() {
    leaderboard.innerHTML = "";

    for (let i = 0; i < highscoresList.length; i++) {

        let highscore = highscoresList[i];
        let li = document.createElement("li");
        li.textContent = highscore.Name + " : " + highscore.Score;
        li.setAttribute("data-index", i);
        li.classList.add("scoreLi");
        leaderboard.appendChild(li);

        let listBreak = document.createElement("br");
        leaderboard.appendChild(listBreak);
    }
}

clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    clearLeaderboard();
})


function clearLeaderboard() {
    localStorage.clear();
    window.location.href = "highscore.html"
}

retryBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "index.html"
})