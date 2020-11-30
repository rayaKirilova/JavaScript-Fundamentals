function personalTitles(arg1, arg2){

    let age = Number(arg1) ; 
    let gender = arg2 ; 

    if (gender === "m"){

        if (age >= 16)
        {
            console.log("Mr.");
        } else if (age < 16){
            console.log("Master");
        }
    } else if (gender === "f"){
        if (age >= 16)
        {
            console.log("Ms.");
        } else if (age < 16){
            console.log("Miss");
        }
    }
}

personalTitles("12", "f");