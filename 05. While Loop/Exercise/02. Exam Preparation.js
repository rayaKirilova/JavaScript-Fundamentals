function examPreparation(array){
    let badGradesCount = Number(array.shift());
    let sum = 0 ; 

    let problemTask ; 
    let countTask = 0 ; 
    let counterGradesUnder4 = 0 ; 

    for (let i = 0 ; i < array.length; i++){

        if (i % 2 !== 0){
            let grade = Number(array[i]) ;
            if (grade <= 4.00){
                counterGradesUnder4 ++ ; 
            }
                sum += grade ;
                countTask++ ;            
        } else {
            problemTask = array[i] ; 
        }

        if (array[i] === "Enough"){
            let averageGrades = sum / countTask  ; 
            console.log(`Average score: ${averageGrades.toFixed(2)}`);
            console.log(`Number of problems: ${countTask}`);
            console.log(`Last problem: ${array[i- 2]}`);
            break ; 
        }

        if (counterGradesUnder4 >= badGradesCount){
            console.log(`You need a break, ${badGradesCount} poor grades.`);
        }
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
    
