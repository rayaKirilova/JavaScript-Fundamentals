function studentInformation(input){

    let name = input[0] ; 
    let age = Number(input[1]) ; 
    let grade = Number(input[2]) ; 

    let averageGrade = grade.toFixed(2) ; 

    console.log(`Name: ${name}, Age: ${age}, Grade: ${averageGrade}.`) ; 
}
studentInformation(['John', 15, 5.54678]) ; 