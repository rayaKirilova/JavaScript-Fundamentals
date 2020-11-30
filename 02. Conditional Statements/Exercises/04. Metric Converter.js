function metricConverter(arg1, arg2, arg3) {
    let num = Number(arg1);
    let inputMetric = arg2 ; 
    let outputMetric = arg3 ; 

    let result = 0 ; 

    if (inputMetric === "mm" && outputMetric === "cm"){
        result = num / 10 ; 
    } else if (inputMetric === "mm" && outputMetric === "m"){
        result = num / 1000 ;
    } else if (inputMetric === "cm" && outputMetric === "m"){
        result = num / 100 ; 
    } else if (inputMetric === "cm" && outputMetric === "mm"){
        result = num * 10 ; 
    } else if (inputMetric === "m" && outputMetric === "cm"){
        result = num * 100
    } else if (inputMetric === "m" && outputMetric === "mm"){
        result = num * 1000 ; 
    }

    console.log(result.toFixed(3));

}

metricConverter ("1201.34",
    "mm","cm");