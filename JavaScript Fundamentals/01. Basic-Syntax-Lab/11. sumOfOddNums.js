function sumOfOddNumbers(input) {
    let n = Number(input[0]);
    let counter = 0;
    let sumOddNums = 0;

    for (let i = 1 ; i <= 100 ; i++) {
        if (i % 2 !== 0 && counter !== n) {
            console.log(i);
            sumOddNums += i;
            counter ++ ; 
        }
        if (counter === n){
            break ; 
        }
    }
    console.log(`Sum: ${sumOddNums}`);
}

sumOfOddNumbers(["5"]); 
sumOfOddNumbers(["25"]); 
