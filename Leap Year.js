function checkIfYearIsLeap (arg){

    let year = arg ;

    if ((year % 100 != 0 && year % 4 == 0) ||
        year % 400 == 0){

        console.log('yes') ;
    } else {
        console.log('no') ;
    }
}

checkIfYearIsLeap(1999) ;