function reverseAnArrayOfNumbers(n, array) {

    let newArray = [] ; 
    for (let i = 0; i < n; i++) {       
        newArray.push(array[i]) ; 
    }
    let toPrint = "" ; 

    for(let x = newArray.length - 1 ; x >= 0 ; x--){
        toPrint += `${newArray[x]} ` ; 
    }
    console.log(toPrint) ; 
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]) ; 
