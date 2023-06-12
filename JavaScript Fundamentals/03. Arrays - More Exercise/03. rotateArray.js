function rotateArray(array) {

    let count = Number(array[array.length - 1]);

    let shiftedArray = array.splice(0, array.length - 1); // [1, 2, 3, 4 ]

    for (let i = 0; i < count; i++) {
        let element = shiftedArray[shiftedArray.length - 1]; // last element 
        shiftedArray.splice(0, 0, element);

      
        shiftedArray = shiftedArray.splice(0, shiftedArray.length - 1);

    }
    console.log(shiftedArray.join(" "));
}
rotateArray(['1', '2', '3', '4', '2']) ; 
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']) ; 

