function operationsBetweenNums(arg1,arg2, arg3){

    let n1 = Number(arg1); 
    let n2 = Number(arg2) ; 
    let operator = arg3 ; 

    let result = 0 ; 

    if (operator === "+"){
        result = n1 + n2; 
        if (result % 2 == 0){
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "-"){
        result = n1 - n2; 
        if (result % 2 == 0){
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "*"){
        result = n1 * n2 ; 
        if (result % 2 == 0){
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator === "/"){
        if (n2 != 0) {
            result = n1 / n2 ; 
            console.log(`${n1} / ${n2} = ${result}`) ; 
        } else if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`) ; 
        }
    } else if (operator === "%"){
        if (n2 != 0) {
            result = n1 % n2 ; 
            console.log(`${n1} % ${n2} = ${result}`) ; 
        } else if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`) ; 
        }
    }
}

operationsBetweenNums("10",
"12",
"+")



