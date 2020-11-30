function depositCalc(num1, num2, num3){
    let depositSum = Number(num1) ;
    let depositTerm = Number(num2) ;
    let gpr = Number(num3) ;

    let sum = depositSum + depositTerm * ((depositSum * gpr/100) / 12);

    console.log(sum.toFixed(2));
}

depositCalc(200, 3, 5.7);
depositCalc(2350, 6, 7);