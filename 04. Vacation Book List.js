function books(num1, num2, num3) {
    let allPages = num1 ; 
    let pagesPerHour = num2 ; 
    let daysCount = num3 ;  

    let timeForWholeBook = allPages / pagesPerHour;
    let hoursPerDay = timeForWholeBook / daysCount ; 

    console.log(hoursPerDay);
}

books("212",
"20",
"2")

books("432",
"15",
"4")
