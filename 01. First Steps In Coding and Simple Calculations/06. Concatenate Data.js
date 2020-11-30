function concatenateData (arg1, arg2, arg3, arg4) {
    let firstName = arg1;
    let lastName = arg2;
    let personAge = Number(arg3);
    let personTown = arg4 ;
    
    console.log(`You are ${firstName} ${lastName}, a ${personAge}-old person from ${personTown}.`);
}

concatenateData("Raya", "Kirilova", 32, "Sofia");

