function oldBooks(array) {
    let searchedBook = array.shift();

    let index = 0;
    let bookIsFound = false;

    while (array[index] !== "No More Books") {
        if (searchedBook === array[index]) {
            bookIsFound = true;
            console.log(`You checked ${index} books and found it.`);
            break;
        }
        index++;
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index} books.`);
    }
}

/*oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])
    */

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
