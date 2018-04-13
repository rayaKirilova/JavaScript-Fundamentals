function square(number) {

    let width = 3 + 2*(number - 2) ;

    if (number % 2 == 0){
         // let height = number - 1 ;

        for (let i = 0 ; i < number / 2 + 1  ; i++){

            console.log('+' + ('-').repeat(number - 2) + '+' +
                ('-').repeat(number - 2) + '+') ;

            console.log('|' + (' ').repeat(number - 2) + '|' +
            (' ').repeat(number - 2) + '|') ;
        }
    } else {
        let height = number ;
    }
    
}

square(4)