function numbersFromNtoM(input){

    let n = Number(input[0]) ; 
    let m = Number(input[1]) ; 


    for (let i = n ; i >= m ; i--){
        console.log(i) ; 
    }
}
numbersFromNtoM(["6", "2"]) ; 