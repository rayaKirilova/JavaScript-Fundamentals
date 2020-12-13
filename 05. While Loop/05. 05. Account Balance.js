function accountBalance(arg) {

    let index = 0;
    let message = 'Increase:';
    let sum = 0;

    while (arg[index] !== "NoMoreMoney") {
        let currentSum = Number(arg[index]) ; 

        if (currentSum < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += Number(arg[index]);
        console.log(`${message} ${currentSum.toFixed(2)}`);        
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])

 accountBalance(["120",
 "45.55",
 "-150"])
    
