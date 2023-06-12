function fishTank(input) {

    let length = Number(input[0]) ; 
    let width = Number(input[1]) ; 
    let height = Number(input[2]) ; 
    let percent = Number(input[3]) ; 

    let tankVolume = length * width * height ; 
    let volumeLitres = tankVolume / 1000 ; 

    let litresWater = volumeLitres * (1 - percent / 100) ; 

    console.log(litresWater) ; 

}

fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);