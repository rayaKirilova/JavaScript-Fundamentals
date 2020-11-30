function aquarium(num1, num2, num3, num4){
    let length = Number(num1);
    let width = Number(num2) ; 
    let height = Number(num3);
    let percent = Number(num4) ; 

    let aquariumVolume = length * height * width ; 
    let litres = aquariumVolume * 0.001 ; 
    let percentLitres = percent * 0.01 ;
    let litresNeeded = litres * (1 - percentLitres) ; 

    console.log(litresNeeded) ; 

}

aquarium(85, 75, 47, 17);
aquarium(105, 77, 89, 18.5);