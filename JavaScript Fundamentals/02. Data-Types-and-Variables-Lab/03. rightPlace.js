function rightPlace(firstWord, letter, secondWord){

    let modifiedWord = firstWord.replace("_", letter) ; // Ra_a
    
    if (modifiedWord === secondWord){
        console.log("Matched") ; 
    } else {
        console.log("Not Matched") ; 
    }
}
rightPlace("Ra_a", "y", "test") ;
rightPlace("Ra_a", "y", "Raya")