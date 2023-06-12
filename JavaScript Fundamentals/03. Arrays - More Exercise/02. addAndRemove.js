function addAndRemove(array) {

    //let sum = 0 ; 
    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === "add") {
            newArray[i] = i + 1;
        } else if (array[i] === "remove") {
            newArray.pop();
        }
    }
    if (newArray.length <= 0) {
        console.log("Empty");
    }
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === undefined || newArray[i] === "") {
        } else {
            console.log(newArray[i]);
        }
    }
}

//addAndRemove(['add', 'add', 'add', 'add']) ; 
addAndRemove(['add', 'add', 'remove', 'add', 'add']);