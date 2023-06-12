function specialNumbers(input){

    let n = Number(input[0]) ; 

    let print = "" ; 

    for (let i = 1 ; i <= 9 ; i++){

        for (let x = 1 ; x <=9 ; x++){

            for (let y = 1 ; y <= 9 ; y++){

                for (let z = 1 ; z <= 9 ; z++){

                    if (n % i === 0 && 
                        n % x === 0 &&
                        n % y === 0 &&
                        n % z === 0){

                            print += "" + i + x + y + z + " " ; 
                        }
                }
            }
        }
    }
    console.log(print) ; 

}

specialNumbers(["3"]) ; 