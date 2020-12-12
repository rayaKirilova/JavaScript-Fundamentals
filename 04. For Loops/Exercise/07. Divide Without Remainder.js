function divideWithoutRemainder(array) {

    let numberCount = Number(array.shift());
    let p1 = 0; let p2 = 0; let p3 = 0; 

    for (let i = 0; i < numberCount; i++) {
        let number = Number(array.shift());

        if (number % 2 === 0) {
            p1++;
        } 
        if (number % 3 === 0) {
            p2++;
        } 
        if (number % 4 === 0) {
            p3++;
        }     
    }
    console.log(`${(p1 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numberCount * 100).toFixed(2)}%`);
}

divideWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])



