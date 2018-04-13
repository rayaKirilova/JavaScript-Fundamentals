function boxesAndBottles(numOfBottles, capacityOfOneBox){

    let numOfBoxes = numOfBottles / capacityOfOneBox ;

    console.log(Math.ceil(numOfBoxes)) ;
}

boxesAndBottles(5, 10) ;