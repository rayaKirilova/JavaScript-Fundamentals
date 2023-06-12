function sumEvenNumbers(array){
    let sum = 0 ; 
    let newArray = [] ;
    
    for (let i = 0 ; i < array.length ; i++){
        newArray.push(Number(array[i])) ; 
    }

   for (let x = 0 ; x < newArray.length ; x++){
       
       if (newArray[x] % 2 === 0){
           sum += newArray[x] ; 
       }
   }
   console.log(sum) ; 
}
sumEvenNumbers(['2','4','6','8','10'])