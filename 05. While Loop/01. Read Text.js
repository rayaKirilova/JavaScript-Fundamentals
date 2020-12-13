function readingWords(array) {

    let index = 0;

    while (array[index] !== "Stop") {
        console.log(array[index]);
        index++;
    }

}

readingWords((["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
)