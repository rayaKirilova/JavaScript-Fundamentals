function oscars(input) {

    let actor = input[0];
    let actorPoints = Number(input[1]);
    let counter = Number(input[2]);

    for (z = 3; z <= counter * 2 + 2; z++) {

        if (z % 2 != 0) {
            let nameLength = input[z].length;
            let points = Number(input[z + 1]);
            actorPoints += ((nameLength * points) / 2);
        }

        if (actorPoints >= 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            break;
        }
    }

    if (actorPoints < 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - actorPoints).toFixed(1)} more!`);
    }
}

/*oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
*/
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

