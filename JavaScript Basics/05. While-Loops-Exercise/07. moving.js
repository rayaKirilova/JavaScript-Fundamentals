function moving(input){
    
    let width = Number(input[0]) ; 
    let length = Number(input[1]) ; 
    let height = Number(input[2]) ;
    
    let cubicMetresAvailable = width * length * height ; 
    let allBoxes = 0 ; 

    let noMoreFreeSpace = false ; 

    let index = 3 ; 

    while (input[index] !== "Done") {

        let boxesSize = Number(input[index]) ; 
        allBoxes += boxesSize ; 

        if (cubicMetresAvailable < allBoxes){
            noMoreFreeSpace = true ; 
            console.log(`No more free space! You need ${allBoxes - cubicMetresAvailable} Cubic meters more.`)
            break ; 
        }

        index ++ ; 
    }

    if (noMoreFreeSpace == false){
        console.log(`${cubicMetresAvailable - allBoxes} Cubic meters left.`) ; 
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

