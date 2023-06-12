function checkPrime(number) {
    let isPrime = true;

    for (let divider = 2; divider <= Math.sqrt(number); divider++) {
        if (number % divider == 0) {
            isPrime = false;
            console.log(isPrime) ; 
            break;
        }
    }
    if (isPrime){
        console.log(isPrime) ; 
    }

}
checkPrime(7);
checkPrime(8);
checkPrime(81);