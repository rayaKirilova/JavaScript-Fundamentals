function multiplicationTable(arg){

    let num = Number(arg) ; 

    for (let i = 1 ; i <= 10 ; i++){

        console.log(`${i} * ${num} = ${i * num}`) ; 
    }
}

multiplicationTable("5") ; 