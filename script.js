let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToString(elapsedTime);
    }, 10);
    showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    showButton("START");
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
    document.getElementById("lapsList").innerHTML = "";
    showButton("START");
}

function lap() {
    let lapsList = document.getElementById("lapsList");
    let li = document.createElement("li");
    li.innerHTML = `<span>Lap ${lapsList.childElementCount + 1}</span> <span>${timeToString(elapsedTime)}</span>`;
    lapsList.prepend(li);
}

function showButton(buttonKey) {
    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const lapBtn = document.getElementById("lapBtn");

    if (buttonKey === "PAUSE") {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        lapBtn.disabled = false;
    } else {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        lapBtn.disabled = true;
    }
}