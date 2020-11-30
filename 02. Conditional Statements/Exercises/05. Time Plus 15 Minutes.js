function timePlus15min(arg1, arg2){

    let hours = Number(arg1); 
    let minutes = Number(arg2) + 15;

    if (minutes >= 60) {
        hours++ ; 
        minutes = minutes - 60 ; 
    }

    if (hours >= 24){
        hours = hours - 24 ;       
    }

    if (minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

timePlus15min("1", "46") ; 
timePlus15min("0", "01");
timePlus15min("23", "59");
timePlus15min("11", "08");
timePlus15min("12", "49");
