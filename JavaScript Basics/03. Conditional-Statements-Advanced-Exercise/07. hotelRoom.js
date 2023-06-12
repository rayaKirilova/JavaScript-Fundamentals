function hotelRoom(input) {

    let month = input[0];
    let days = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = days * 50;
        apartmentPrice = days * 65;

        if (days > 7 && days < 14) {
            studioPrice = studioPrice - studioPrice * 0.05;
        } else if (days > 14) {
            studioPrice = studioPrice - studioPrice * 0.3;
            apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
        }
    } else if (month === "June" || month === "September") {
        studioPrice = days * 75.20;
        apartmentPrice = days * 68.70;

        if (days > 14) {
            studioPrice = studioPrice - studioPrice * 0.2;
            apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
        }

    } else if (month === "July" || month === "August") {
        studioPrice = days * 76;
        apartmentPrice = days * 77;

        if (days > 14) {
            apartmentPrice = apartmentPrice - apartmentPrice * 0.1;
        }
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`) ; 
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`) ; 
}

hotelRoom(["May",
"15"])
hotelRoom(["June",
"14"])
hotelRoom(["August",
"20"])

