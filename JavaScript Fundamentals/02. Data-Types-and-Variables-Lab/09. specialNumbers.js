function specialNumbers(n){

    let isSpecial = false ; 
    let sum = 0 ; 

    for (let i = 1 ; i <= n ; i++){
        
        sum += i % 10 ; 
        let divider = parseInt(i / 10) ; 
        sum += divider ;

        if (sum === 5 || sum === 7 || sum === 11){
            isSpecial = true ; 
            console.log(`${i} -> True`) ; 
        } else {
            console.log(`${i} -> False`) ;
        }

        sum = 0 ; 
    }
}

specialNumbers(20)