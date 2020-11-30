function animalShop(num1, num2) {
    let dogCount = Number(num1) ; 
    let otherCount = Number(num2); 

    let foodExpences = dogCount * 2.50 + otherCount * 4 ; 

    console.log(`${foodExpences} lv.`);
}

animalShop(5, 4);
animalShop(13, 9);