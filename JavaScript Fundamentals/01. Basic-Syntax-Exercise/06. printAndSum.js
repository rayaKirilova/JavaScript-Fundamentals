function printAndSum(input) {
    let firstNumber = Number(input[0]) ; 
    let secondNumber = Number(input[1]) ; 

    let sum = 0 ; 
    let print = "" ;

    for (let i = firstNumber ; i <= secondNumber ; i++){
        sum += i ; 
        print += i + " " ; 
    }
    console.log(print)
    console.log(`Sum: ${sum}`) ; 
}

printAndSum(["5", "10"])