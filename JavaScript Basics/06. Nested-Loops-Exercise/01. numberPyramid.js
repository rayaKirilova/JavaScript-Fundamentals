function numberPyramid(input){

    let number = Number(input[0]) ; 
    let current = 1 ; 
    let isBigger = false ; 
    let printCurrentLine = "" ; 

    for (let i = 1; i <= number; i++) {

        for (j = 1 ; j <= i ; j++){
            if (current > number) {
                isBigger = true ; 
                break ; 
            }
            printCurrentLine += current + " " ; 
            current ++ ; 
        }
        console.log(printCurrentLine) ; 
        printCurrentLine = "" ; 

        if (isBigger){
            break ; 
        }
    }
}

numberPyramid(["7"])