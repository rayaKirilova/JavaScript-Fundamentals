function examPreparation(input) {

    let poorGrades = Number(input[0]) ; 
    let poorGradesCounter = 0 ; 
    let needABreak = false ; 

    let index = 1 ; 

    let taskName = "" ; 
    let taskGrade = 0 ; 

    let taskCounter = 0 ; 
    let sumGrades = 0 ; 

    while (input[index] !== "Enough"){

        if (index % 2 == 0) {
            taskGrade = Number(input[index]) ;

            if (taskGrade <= 4) {
                poorGradesCounter ++ ; 
            } 
            sumGrades += taskGrade ;  

        } else {
            taskName = input[index] ; 
            taskCounter ++ ; 
        }
        index ++ ; 
        if (poorGradesCounter === poorGrades) {
            needABreak = true ; 
            console.log(`You need a break, ${poorGrades} poor grades.`) ; 
            break ; 
        }
    }
    if (needABreak === false) {
        let averageScore = sumGrades / taskCounter ; 

        console.log(`Average score: ${averageScore.toFixed(2)}`) ;
        console.log(`Number of problems: ${taskCounter}`) ; 
        console.log(`Last problem: ${taskName}`) ; 
    }   
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

