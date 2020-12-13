function password(array){

    let name = array[0] ; 
    let password = array[1] ; 

    let index = 0 ; 

    for (let i = 2 ; i <= array.length - 1 ; i++){

        if (array[i] === password){
            console.log(`Welcome ${name}!`) ;
            break ; 
        }
    }
}

password(["Nakov",
"1234",
"Pass",
"nanana",
"kakaka"])
password(["Gosho",
"secret",
"secraaaet"])
