function dayOfWeek(index) {

    let days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    if (index >= 1 && index <= 7) {
        console.log(days[index - 1]);
    } else if (index === 0) {
        console.log(days[0]);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(3);
dayOfWeek(0) ; 
dayOfWeek(11)