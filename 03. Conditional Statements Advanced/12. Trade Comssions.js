function tradeComssions(arg1, arg2){
    let town = arg1 ; 
    let sales = Number(arg2) ; 

    let comission = 0 ; 

    if (sales >= 0 && sales <= 500){

        if (town === "Sofia"){
            comission = sales * 5 / 100 ; 
            console.log(comission.toFixed(2));
        } else if (town === "Varna"){
            comission = sales * 4.5 / 100; 
            console.log(comission.toFixed(2));
        } else if (town === "Plovdiv"){
            comission = sales * 5.5 / 100 ; 
            console.log(comission.toFixed(2));
        } else {
            console.log("error") ; 
        }

    } else if (sales > 500 && sales <= 1000){

        if (town === "Sofia"){
            comission = sales * 7 / 100 ; 
            console.log(comission.toFixed(2));
        } else if (town === "Varna"){
            comission = sales * 7.5 / 100; 
            console.log(comission.toFixed(2));
        } else if (town === "Plovdiv"){
            comission = sales * 8 / 100 ; 
            console.log(comission.toFixed(2));
        } else {
            console.log("error") ; 
        }

    } else if (sales > 1000 && sales <= 10000) {

        if (town === "Sofia"){
            comission = sales * 8 / 100 ; 
            console.log(comission.toFixed(2));
        } else if (town === "Varna"){
            comission = sales * 10 / 100; 
            console.log(comission.toFixed(2));
        } else if (town === "Plovdiv"){
            comission = sales * 12 / 100 ; 
            console.log(comission.toFixed(2));
        } else {
            console.log("error") ; 
        }

    } else if (sales > 10000){

        if (town === "Sofia"){
            comission = sales * 12 / 100 ; 
            console.log(comission.toFixed(2));
        } else if (town === "Varna"){
            comission = sales * 13 / 100; 
            console.log(comission.toFixed(2));
        } else if (town === "Plovdiv"){
            comission = sales * 14.5 / 100 ; 
            console.log(comission.toFixed(2));
        } else {
            console.log("error") ; 
        }
     } else {
         console.log("error");
     }
}

tradeComssions("kasp",
"15000")
