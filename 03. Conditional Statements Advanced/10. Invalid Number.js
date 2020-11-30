function invalidNumber(arg){

    let number = Number(arg);

    if (number < 100 && number != 0){
        console.log("invalid");
    } else if (number > 200){
        console.log("invalid");
    }
}

invalidNumber("220");