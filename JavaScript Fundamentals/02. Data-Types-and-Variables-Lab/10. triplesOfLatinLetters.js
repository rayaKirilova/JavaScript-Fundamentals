function tripleOfLatinLetters(n){

    for (let i = 0 ; i < n ; i++){
        let firstLetter = String.fromCharCode(97 + i) ;

        for (let z = 0 ; z < n ; z++){
            let secondLetter = String.fromCharCode(97 + z) ;

            for (let x = 0 ; x < n ; x++){

                let thirdLetter = String.fromCharCode(97 + x) ; 
               
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`) ; 
            }
        }
    }
}
tripleOfLatinLetters(3)