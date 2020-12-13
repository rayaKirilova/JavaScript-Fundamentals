function sumNumbers(array) {

    let number = Number(array.shift());
    let sum = 0;
    let index = 0;

    while (sum <= number && index < array.length) {
        sum += Number(array[index]);
        index++;
    }

    console.log(sum);
}
/*sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
*/

sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
