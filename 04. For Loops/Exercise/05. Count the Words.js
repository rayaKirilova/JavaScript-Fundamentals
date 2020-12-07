function countTheWords(arg){

    let text = arg; 
    let words = arg.split(" ").length ; 

    if (words > 10){
        console.log(`The message is too long to be send! Has ${words} words.`) ; 
    } else {
        console.log(`The message was send successfully!`) ; 
    }
}

countTheWords("This message has exactly eleven words. One more as it's allowed!")