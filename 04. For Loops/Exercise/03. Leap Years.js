function leapYears(arg1, arg2){

    let leapYear = Number(arg1) ; 
    let finalYear = Number(arg2) ; 

    for (let i = leapYear ; i <= finalYear; i+= 4){
        console.log(i) ; 
    }
}

leapYears("2000",
"2011")


