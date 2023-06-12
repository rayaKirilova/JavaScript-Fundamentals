function reverseString(input){

    let index = input.length ; //5
    reversed = "" ; 

    for (let i = index - 1 ; i >= 0 ; i--){
        reversed += input[i] ; 
    }
    console.log(reversed) ; 
}
reverseString("Hello") ; 
reverseString("SoftUni") ; 
