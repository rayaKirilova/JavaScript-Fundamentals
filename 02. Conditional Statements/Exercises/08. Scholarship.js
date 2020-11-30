function scholarship(arg1, arg2, arg3){

    let inBGN = Number(arg1) ; 
    let average = Number(arg2) ; 
    let minSalary = Number(arg3) ; 

    let socialScholarship = minSalary * 0.35 ; 
    let scholarshipForExcellentResults = average * 25 ; 

    if (inBGN <= minSalary){

        if (average < 4.50){
            console.log(`You cannot get a scholarship!`);
        } else if (average >= 4.50 && average < 5.50) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`) ;            
        } else if (average >= 5.50){

            if (socialScholarship > scholarshipForExcellentResults){
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`) ;            
            } else {
                console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipForExcellentResults)} BGN`);              
            }
        }
    } else if (inBGN > minSalary){

        if (average >= 5.50){
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipForExcellentResults)} BGN`);              
        } else {
            console.log(`You cannot get a scholarship!`);     
        }
    }
}

scholarship("480.00",
"4.60",
"450.00")
scholarship("300.00",
"5.65",
"420.00")