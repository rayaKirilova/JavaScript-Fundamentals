function histogram(array) {

    let numberCount = Number(array.shift());
    let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0; let p5 = 0;

    for (let i = 0; i < numberCount; i++) {
        let number = Number(array.shift());

        if (number < 200) {
            p1++;
        } else if (number >= 200 && number <= 399) {
            p2++;
        } else if (number >= 400 && number <= 599) {
            p3++;
        } else if (number >= 600 && number <= 799) {
            p4++;
        } else if (number >= 800) {
            p5++;
        }
    }
    console.log(`${(p1 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / numberCount * 100).toFixed(2)}%`);
}
histogram(["3",
    "1",
    "2",
    "999"])


