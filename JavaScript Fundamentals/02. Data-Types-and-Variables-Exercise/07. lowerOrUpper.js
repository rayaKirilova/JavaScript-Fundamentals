function lowerOrUpper(char) {

    //upper 
    for (let i = 65; i <= 95; i++) {

        let letter = String.fromCharCode(i);

        if (char === letter) {
            console.log("upper-case");
        }
    }

    //lower
    for (let x = 97; x <= 122; x++) {
        let letter = String.fromCharCode(x);

        if (char === letter) {
            console.log("lower-case");
        }
    }
}

lowerOrUpper("L")
lowerOrUpper("l")
