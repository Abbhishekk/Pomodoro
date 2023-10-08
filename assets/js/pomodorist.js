

var interval;
var pomodoroMiutes = 25;
var shortBreakMinutes = 5;
var longBreakMinutes = 20;
var startingMinutes = pomodoroMiutes;
var minutes = pomodoroMiutes;
var seconds = 0;
setTime();

function start() {
    clearInterval(interval);

    interval = window.setInterval(countdown, 1000);
}

function countdown() {

    seconds--;
    
    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }
    if (minutes == 0 && seconds == 0) {
        document.getElementById("notification").play();
        stop();
        reset();
    }
    
    setTime();        
}

function stop() {
    clearInterval(interval);
}

function reset() {
        minutes = startingMinutes;
        seconds = 0;
    stop();
    setTime();    
}

function setPomodoro() {
        startingMinutes = pomodoroMiutes;
        minutes = startingMinutes;
        seconds = 0;
        document.getElementById("pomodoro").style.backgroundColor = "white";
        document.getElementById("pomodoro").style.color = "rgb(13, 121, 123)";
        document.getElementById("short").style.backgroundColor = "transparent";
        document.getElementById("short").style.color = "white";
        document.getElementById("long").style.backgroundColor = "transparent";
        document.getElementById("long").style.color = "white";
    stop();
    setTime();   
    //start();
}

function setShortBreak() {
        startingMinutes = shortBreakMinutes;
        minutes = startingMinutes;
        seconds = 0;
        document.getElementById("pomodoro").style.backgroundColor = "transparent";
        document.getElementById("pomodoro").style.color = "white";
        document.getElementById("short").style.backgroundColor = "white";
        document.getElementById("short").style.color = "rgb(13, 121, 123)";
        document.getElementById("long").style.backgroundColor = "transparent";
        document.getElementById("long").style.color = "white";
    stop();
    setTime(); 
    //start();
}

function setLongBreak() {
        startingMinutes = longBreakMinutes;
        minutes = startingMinutes;
        seconds = 0;
        document.getElementById("pomodoro").style.backgroundColor = "transparent";
        document.getElementById("pomodoro").style.color = "white";
        document.getElementById("short").style.backgroundColor = "transparent";
        document.getElementById("short").style.color = "white";
        document.getElementById("long").style.backgroundColor = "white";
        document.getElementById("long").style.color = "rgb(13, 121, 123)";
    stop();
    setTime();    
    //start();
}

function setTime() {
  document.getElementById("time").innerHTML = minutes + ':' + pad(seconds); 
}

function pad(number)
{
    if ( number < 10)
    {
        return ( '0' + number);
    }
    else {
        return number;
    }
}






