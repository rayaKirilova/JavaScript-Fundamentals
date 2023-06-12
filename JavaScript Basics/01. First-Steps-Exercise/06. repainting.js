function repainting(input) {
    
    let nylon = Number(input[0]) ; 
    let paint = Number(input[1]) ; 
    let thinner = Number(input[2]) ; 
    let hours = Number(input[3]) ; 

    let neededPaint = (paint + 0.1 * paint) * 14.5 ; 
    let neededNylon = 1.50 * (nylon + 2) ; 

    let expenses = neededNylon + neededPaint + thinner * 5 + 0.40 ; 
    let expensesForWork = expenses * 0.30 ; 

    let allExpenses = expenses + expensesForWork * hours ; 

    console.log(allExpenses) ; 

}

repainting(["10 ","11 ","4 ","8 "]) ; 

repainting(["5 ","10 ","10 ","1 "]) ; 