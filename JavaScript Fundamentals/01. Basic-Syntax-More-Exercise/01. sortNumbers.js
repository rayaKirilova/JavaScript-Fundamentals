function sortNumbers(arg1, arg2, arg3) {

    let num1 = arg1; // 2
    let num2 = arg2; // 1
    let num3 = arg3; // 3

    if (num1 > num2 && num1 > num3) {
        console.log(num1);

        if (num2 > num3) {
            console.log(num2);
            console.log(num3);
        } else {
            console.log(num3);
            console.log(num2);
        }
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);

        if (num1 > num3) {
            console.log(num1);
            console.log(num3);
        } else {
            console.log(num3);
            console.log(num1);
        }
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3);

        if (num2 > num1) {
            console.log(num2);
            console.log(num1);
        } else {
            console.log(num1);
            console.log(num2);
        }
    }
}
sortNumbers(2, 1, 3); 