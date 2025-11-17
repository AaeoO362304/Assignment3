document.getElementById("playButton").addEventListener("click", function() {
    var timer = document.getElementById("timer");
    var square = document.getElementById("square");
    var boxWidth = document.getElementById("play-area").offsetWidth-20;
    var boxHeight = document.getElementById("play-area").offsetHeight-20;  
    document.getElementById("Leaderboard").hidden=true; 
    document.getElementById("playButton").hidden=true;
    document.getElementById("statsButton").hidden=true;
    document.getElementById("buttons").style.marginTop="30%";
    document.getElementById("leaderboardButton").hidden=true;
    square.hidden=false;
    let time = 60;
    let randomX = Math.floor(Math.random()*boxWidth);
    let randomY = Math.floor(Math.random()*boxHeight);
    square.style.left=randomX + "px" ;
    square.style.top=randomY + "px" ;
    timer.textContent = time;
    let countdown = setInterval(function() {
    square.hidden=false;
    time--;
    timer.textContent = time;
    if (time <= 0) {
        clearInterval(countdown);
        square.hidden=true;
        document.getElementById("playButton").hidden=false;
        document.getElementById("statsButton").hidden=false;
        document.getElementById("leaderboardButton").hidden=false;
        let score= document.getElementById("score").textContent;
        let user = document.getElementById("username").value;
        if (user==="") user="Anonymous";
        let data = {
        score: score,
        user: user
        };
        localStorage.setItem("gameData", JSON.stringify(data));
    }
    let randomX =  Math.floor(Math.random()*boxWidth);
    let randomY =  Math.floor(Math.random()*boxHeight);
    square.style.left=randomX + "px" ;
    square.style.top=randomY + "px" ;
    }, 1000);
});

 document.getElementById("square").addEventListener("click", function() {
            document.getElementById("score").textContent = Number (document.getElementById("score").textContent) + 1;
            square.hidden=true;
        });

document.getElementById("leaderboardButton").addEventListener("click", function() {
    var leader = document.getElementById("Leaderboard");    
    document.getElementById("buttons").style.marginTop="7.5%";
    document.getElementById("statsButton").hidden=true;
    document.getElementById("leaderboardButton").hidden=true;
    leader.hidden=false;
    let savedData = localStorage.getItem("gameData");
    if (savedData) {
    let dataObj = JSON.parse(savedData);
    document.getElementById("Leaderboard").textContent ="Username: "+ dataObj.user + " Score: " + dataObj.score; }
    });