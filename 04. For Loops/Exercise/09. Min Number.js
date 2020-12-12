function minNumber(array) {
    let n = Number(array.shift());

    let min = Number(array[0]);

    for (let i = 0; i < n; i++) {

        if (min > Number(array[i])) {
            min = array[i];
        }
    }
    console.log(min);
}

minNumber(["3", "10", "20", "30"])
