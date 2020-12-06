function evenPowersOf2(arg){
    let n = Number(arg) ; 
    let number = 1 ;    
    for (let i = 0 ; i <= n ; i += 2){

        console.log(number) ; 
        number = number * 2 * 2 ; 
    }

}

evenPowersOf2(4)