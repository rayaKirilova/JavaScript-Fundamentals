function workingHours(arg1, arg2){

    let hour = Number(arg1); 
    let day = arg2 ; 

    switch(day){
        case "Monday": case "Tuesday":  case "Wednesday": case "Thursday": case "Friday": case "Saturday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            } else {
                console.log("closed");
            }
        break;   
        default:
            console.log("closed");
            break ;  
    
    }
}

workingHours("11", "Sunday");