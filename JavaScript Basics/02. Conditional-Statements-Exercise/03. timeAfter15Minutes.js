function timeAfter15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15 ;

    if (minutes >= 60) {
        hours++;
        minutes = minutes - 60;
    }

    if (hours >= 24) {
        hours = hours - 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

timeAfter15Minutes(["12", "30"]);
timeAfter15Minutes(["1", "46"]);
timeAfter15Minutes(["0", "01"]);
timeAfter15Minutes(["23", "59"]);
timeAfter15Minutes(["11", "08"]);
timeAfter15Minutes(["12", "49"]);