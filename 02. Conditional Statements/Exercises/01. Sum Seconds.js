function sumSeconds(arg1, arg2, arg3){

    let secFirst = Number(arg1) ; let secSecond = Number(arg2) ; let secThird = Number(arg3) ; 

    let sumSeconds = secFirst + secSecond + secThird ; 
    
    let minutes = Math.floor(sumSeconds / 60) ; 
    let seconds = sumSeconds % 60 ;

    if (seconds <= 9){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds("35", "45", "44");
sumSeconds("22", "7", "34") ; 