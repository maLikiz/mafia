function startTimer() {
setInterval(function() {
if (timer.seconds == 0) {
timer.seconds = 59;
if (timer.minutes == 0) {
timer.minutes = 59;
if (timer.hours == 0) {
timer.hours = 23;
timer.days--;
} else {
timer.hours--;
}
} else {
timer.minutes--;
}
} else {
timer.seconds--;
}
renderTimer();
}, 1000);
renderTimer();
}
function renderTimer() {
$(".ah-tour-timer-value .dd").html((timer.days < 10 ? "0" : "") + timer.days);
$(".ah-tour-timer-value .hh").html((timer.hours < 10 ? "0" : "") + timer.hours);
$(".ah-tour-timer-value .mm").html((timer.minutes < 10 ? "0" : "") + timer.minutes);
$(".ah-tour-timer-value .ss").html((timer.seconds < 10 ? "0" : "") + timer.seconds);
}
/**/
function startTimer2() {
setInterval(function() {
if (timer2.seconds == 0) {
timer2.seconds = 59;
if (timer2.minutes == 0) {
timer2.minutes = 59;
if (timer2.hours == 0) {
timer2.hours = 23;
timer2.days--;
} else {
timer2.hours--;
}
} else {
timer2.minutes--;
}
} else {
timer2.seconds--;
}
rendertimer2();
}, 1000);
rendertimer2();
}
function rendertimer2() {
$(".tourney-time .dd").html((timer2.days < 10 ? "0" : "") + timer2.days);
$(".tourney-time .hh").html((timer2.hours < 10 ? "0" : "") + timer2.hours);
$(".tourney-time .mm").html((timer2.minutes < 10 ? "0" : "") + timer2.minutes);
$(".tourney-time .ss").html((timer2.seconds < 10 ? "0" : "") + timer2.seconds);
}


function startTimer3() {
setInterval(function() {
if (timer3.seconds == 0) {
timer3.seconds = 59;
if (timer3.minutes == 0) {
timer3.minutes = 59;
if (timer3.hours == 0) {
timer3.hours = 23;
timer3.days--;
} else {
timer3.hours--;
}
} else {
timer3.minutes--;
}
} else {
timer3.seconds--;
}
rendertimer3();
}, 1000);
rendertimer3();
}
function rendertimer3() {
$(".tourney-time2 .dd").html((timer3.days < 10 ? "0" : "") + timer3.days);
$(".tourney-time2 .hh").html((timer3.hours < 10 ? "0" : "") + timer3.hours);
$(".tourney-time2 .mm").html((timer3.minutes < 10 ? "0" : "") + timer3.minutes);
$(".tourney-time2 .ss").html((timer3.seconds < 10 ? "0" : "") + timer3.seconds);
}

function starttimer4() {
setInterval(function() {
if (timer4.seconds == 0) {
timer4.seconds = 59;
if (timer4.minutes == 0) {
timer4.minutes = 59;
if (timer4.hours == 0) {
timer4.hours = 23;
timer4.days--;
} else {
timer4.hours--;
}
} else {
timer4.minutes--;
}
} else {
timer4.seconds--;
}
rendertimer4();
}, 1000);
rendertimer4();
}
function rendertimer4() {
$(".block-info-time .dd").html((timer4.days < 10 ? "0" : "") + timer4.days);
$(".block-info-time .hh").html((timer4.hours < 10 ? "0" : "") + timer4.hours);
$(".block-info-time .mm").html((timer4.minutes < 10 ? "0" : "") + timer4.minutes);
$(".block-info-time .ss").html((timer4.seconds < 10 ? "0" : "") + timer4.seconds);
}


