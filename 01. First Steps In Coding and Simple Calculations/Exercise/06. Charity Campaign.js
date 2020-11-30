function charity(num1, num2, num3, num4, num5){
    let days = Number(num1);
    let chefs = Number(num2);
    let cakes = Number(num3);
    let waffles = Number(num4);
    let pancakes = Number(num5);

    let sumOfAllSells = (cakes * 45 + waffles * 5.80 + pancakes * 3.20) * chefs * days;
    let sumForCharity = sumOfAllSells - (sumOfAllSells / 8) ; 

    console.log(sumForCharity);
}

charity(23, 8, 14, 30, 16);
charity(131, 5, 9, 33, 46);