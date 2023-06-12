function vacationBookList(input) {

    let pages = Number(input[0]) ; 
    let pagesPerHour = Number(input[1]) ; 
    let days = Number(input[2]) ; 

    let hoursPerDay = pages / pagesPerHour / days ; 

    console.log(hoursPerDay) ; 

}

vacationBookList(["212", "20", "2"]) ; 
vacationBookList(["432", "15", "4"]) ; 