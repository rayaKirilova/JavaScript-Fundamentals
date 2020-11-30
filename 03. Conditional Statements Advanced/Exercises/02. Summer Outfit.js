function summerOutfit(num, input){

    let outfit ; 
    let shoes ; 

    if (num >= 10 && num <= 18 ){
        
        if (input == "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (input == "Afternoon" || input == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
    } else if (num > 18 && num <= 24){
        if (input == "Morning" || input == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (input == "Afternoon"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        } 
    } else if (num >= 25){
        if (input == "Morning"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (input == "Afternoon"){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (input == "Evening"){
            outfit = "Shirt"; 
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${num} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(16, "Morning");
summerOutfit(22, "Afternoon");