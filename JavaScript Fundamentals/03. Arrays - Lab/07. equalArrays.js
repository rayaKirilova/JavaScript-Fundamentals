function equalArrays(firstArray, secondArray) {
    let areEqual = true;
    let sum = 0;
    // let differIndex = 0 ; 

    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
    }
    for (let i = 0; i < secondArray.length; i++) {
        secondArray[i] = Number(secondArray[i]);
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual = false;
            break;
        } else {
            sum += firstArray[i];
        }
    }
    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5']) ; 

equalArrays(['10','20','30'], ['10','20','30']) ; 

equalArrays(['1'], ['10']) ; 
