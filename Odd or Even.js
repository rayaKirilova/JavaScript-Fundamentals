function oddOrEven(input) {

    let reminder = input % 2 ;

    if (reminder == 0){
        console.log('even');
    } else if (reminder == Math.round(reminder)){
        console.log('odd');
    } else {
        console.log('invalid');
    }

}

oddOrEven(1.5);