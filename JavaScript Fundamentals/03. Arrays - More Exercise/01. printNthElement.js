function printNElement(array) {

    let toPrint = array[0] + " " ; 
    let step =  Number(array[array.length - 1]) ; 

    for (let i = 1 ; i < array.length - 1; i++){
        if (i % step === 0){
            toPrint += array[i] + " " ; 
        }
    }
    console.log(toPrint) ; 
}
printNElement(['5', '20', '31', '4', '20', '2']) ; 
printNElement(['dsa', 'asd', 'test', 'test', '2'])
