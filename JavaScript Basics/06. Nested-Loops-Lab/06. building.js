function building(input) {

    let floorsCount = Number(input[0]); // 6
    let roomsCount = Number(input[1]);  // 4

    for (i = floorsCount; i >= 1; i--) {

        let toPrint = "";

        for (j = 0; j < roomsCount; j++) {

            if (i === floorsCount) {
                toPrint += `L${i}${j} `;
            } else if (i % 2 === 0) {
                toPrint += `O${i}${j} `;
            } else {
                toPrint += `A${i}${j} `;
            }          
        }
        console.log(toPrint);
    }
}

building(["6", "4"])