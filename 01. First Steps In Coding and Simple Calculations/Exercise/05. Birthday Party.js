function birthdayParty(rent){

    let cake = Number(rent) * 0.2 ; 
    let beverages = cake - (cake * 0.45) ; 
    let clown = Number(rent) / 3 ;

    let result = Number(rent) + cake + beverages + clown ; 

    console.log(result) ; 
}

birthdayParty(2250);
birthdayParty(3720);