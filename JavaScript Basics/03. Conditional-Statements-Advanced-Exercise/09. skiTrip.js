function skiTrip(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let totalPrice = 0;

    if (days < 10) {

        if (roomType === "room for one person") {
            totalPrice = (days - 1) * 18;
        } else if (roomType === "apartment") {
            totalPrice = (days - 1) * 25;
            totalPrice = totalPrice - totalPrice * 0.3;
        } else if (roomType === "president apartment") {
            totalPrice = (days - 1) * 35;
            totalPrice = totalPrice - totalPrice * 0.1;
        }

    } else if (days >= 10 && days <= 15) {

        if (roomType === "room for one person") {
            totalPrice = (days - 1) * 18;
        } else if (roomType === "apartment") {
            totalPrice = (days - 1) * 25;
            totalPrice = totalPrice - totalPrice * 0.35;
        } else if (roomType === "president apartment") {
            totalPrice = (days - 1) * 35;
            totalPrice = totalPrice - totalPrice * 0.15;
        }

    } else if (days > 15) {

        if (roomType === "room for one person") {
            totalPrice = (days - 1) * 18;
        } else if (roomType === "apartment") {
            totalPrice = (days - 1) * 25;
            totalPrice = totalPrice - totalPrice * 0.5;
        } else if (roomType === "president apartment") {
            totalPrice = (days - 1) * 35;
            totalPrice = totalPrice - totalPrice * 0.2;
        }
    }

    if (feedback === "positive") {
        totalPrice = totalPrice + totalPrice * 0.25;
    } else if (feedback === "negative") {
        totalPrice = totalPrice - totalPrice * 0.1;
    }
    console.log(totalPrice.toFixed(2));
}

skiTrip(["2",
    "apartment",
    "positive"]);
skiTrip(["14",
    "apartment",
    "positive"])
skiTrip(["30",
    "president apartment",
    "negative"])
skiTrip(["12",
    "room for one person",
    "positive"])

