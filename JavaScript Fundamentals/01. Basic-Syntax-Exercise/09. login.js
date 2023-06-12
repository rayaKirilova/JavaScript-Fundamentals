function login(input){

    let username = input[0] ; 
    let length = username.length ; // 4
    let reversed = "" ; 

    for (let i = length - 1 ; i >= 0 ; i--){
        reversed += username[i] ; 
    }
    //console.log(reversed) ;
    
    let isBlocked = false ; 
    let index = 1 ;
    let command = input[index] ; 
    let counter = 0 ; 
     
    while (command !== reversed){
        console.log("Incorrect password. Try again.") ;
        counter ++ ; 
        
        if (counter === 4 && command !== reversed){
            isBlocked = true ;
            console.log(`User ${username} blocked!`) ;  
            break ; 
        }
        index ++ ; 
        command = input[index] ; 
    }
    if (isBlocked === false){
        console.log(`User ${username} logged in.`) ; 
    }
 
}

login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])