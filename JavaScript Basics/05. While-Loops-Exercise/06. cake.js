function cake(input) {

    let length = Number(input[0]) ; 
    let width = Number(input[1]) ; 

    let piecesCount = length * width ; 
    let piecesForGuests = 0 ; 
    let noMoreCakeLeft = false ; 

    let index = 2 ;
    
    while (input[index] !== "STOP") {

        let pieceCake = Number(input[index]) ;
        piecesForGuests += pieceCake ;  
        
        if (piecesForGuests > piecesCount) {
            noMoreCakeLeft = true ; 
            console.log(`No more cake left! You need ${piecesForGuests - piecesCount} pieces more.`) ; 
            break ; 
        }
        index ++ ; 
    }
    if (noMoreCakeLeft == false){
        console.log(`${piecesCount - piecesForGuests} pieces are left.`) ; 
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]) ; 

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
