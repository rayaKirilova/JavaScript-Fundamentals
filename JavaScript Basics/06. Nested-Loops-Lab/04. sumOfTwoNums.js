function sumofTwoNums(array) {
    let firstNum = Number(array[0]);
    let secondNum = Number(array[1]);
    let magicNum = Number(array[2]);
    
    let counter = 0;
    let isFound = false;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let z = firstNum; z <= secondNum; z++) {
            counter++;
            if (i + z === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

sumofTwoNums(["88", 
"888", 
"2000"])
