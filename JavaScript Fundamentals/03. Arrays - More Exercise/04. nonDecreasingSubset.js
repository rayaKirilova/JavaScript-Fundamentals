function nonDecreasingSubset(array){

   // let biggestNum = Number.MIN_VALUE ; 
   let newArray = [] ;

   
  // [ 1, 3, 8, 4, 10, 12, 3, 2, 24]

    for (let i = 0 ; i < array.length ; i++){

        if (array[i] < array[i + 1] ||
            array[i] > array[i - 1] &&
            (i - 1 >= 0) &&
            (i + 1 < array.length - 1)){
            newArray.push(array[i]) ;  
        }
    }
    console.log(newArray) ; 
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
//nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])
