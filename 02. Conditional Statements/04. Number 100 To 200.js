function numberBetween100and200(num){

    let number = Number(num) ; 

    if (number < 100) {
        console.log("Less than 100");
    } else if (number >= 100 & number <= 200){
        console.log("Between 100 and 200");
    } else if (number > 200) {
        console.log("Greater than 200");
    }
}

numberBetween100and200(95);
numberBetween100and200(120);
numberBetween100and200(210);