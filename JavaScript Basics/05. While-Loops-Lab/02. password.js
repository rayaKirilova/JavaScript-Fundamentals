function password(input) {

    let user = input[0] ; 
    let password = input[1] ; 
  
    let index = 2 ; 
    let data = input[index] ; 

    while (data !== password){
        data = input[index] ; 
        index ++ ; 
    }
    console.log(`Welcome, ${user}!`)
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
password(["Gosho",
"secret",
"secret"]) 

