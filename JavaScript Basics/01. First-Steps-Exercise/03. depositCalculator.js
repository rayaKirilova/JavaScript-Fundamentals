function depositCalculator(input) {

    let depositSum = Number(input[0]) ; 
    let term = Number(input[1]) ; 
    let percent = Number(input[2]) ; 

    let sum = depositSum + term * ((depositSum * percent/ 100) / 12); 

    console.log(sum) ; 

}

depositCalculator(["200 ", "3 ", "5.7"]) ; 
depositCalculator(["2350 ", "6 ", "7"]) ; 