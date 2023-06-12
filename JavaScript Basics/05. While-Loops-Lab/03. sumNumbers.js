function sumNumbers(input) {

    let number = Number(input[0]) ; 
    let sum = 0 ;
  
    for (i = 1 ; i < input.length ; i++){
        sum += Number(input[i]) ; 

        if (number == sum){
            break ;
        }
    }
    console.log(sum) ; 
}

/*sumNumbers(["100",
"10",
"20",
"30",
"40"])
*/
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

