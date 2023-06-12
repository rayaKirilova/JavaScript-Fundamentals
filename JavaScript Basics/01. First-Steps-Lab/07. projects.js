function projects(input) {

    let name = input[0] ; 
    let projectsCount = Number(input[1]) ; 
    let hours = 3 * projectsCount ; 


    console.log(`The architect ${name} will need ${hours} hours to complete ${projectsCount} project/s.`)
}

projects (["Georgi" , "4"]) ; 
projects (["Sanya" , "9"]) ; 

