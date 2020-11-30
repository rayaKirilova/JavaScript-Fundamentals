function journey(arg1, arg2){

    let budget = Number(arg1) ; 
    let season = arg2 ; 

    let expenses = 0 ; 

    if (budget <= 100){
        if (season === "summer"){
            expenses = budget * 0.3 ; 
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${expenses.toFixed(2)}`);
        } else if (season === "winter"){
            expenses = budget * 0.7 ; 
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${expenses.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 1000){
        if (season === "summer"){
            expenses = budget * 0.4 ; 
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${expenses.toFixed(2)}`);
        } else if (season === "winter"){
            expenses = budget * 0.8 ; 
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${expenses.toFixed(2)}`);
        }
    } else if (budget > 1000){
        expenses = budget * 0.9 ; 
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${expenses.toFixed(2)}`);

    }
}

journey("1500", "summer")
