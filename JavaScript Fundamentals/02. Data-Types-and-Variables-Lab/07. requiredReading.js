function requiredReading(bookPages, pagesPerHour, days) {

    let pages = bookPages / pagesPerHour ; 
    let pagesPerDay = pages / days ; 

    console.log(pagesPerDay) ; 
}
requiredReading(212, 20, 2) ; 
requiredReading(432, 15, 4) ;