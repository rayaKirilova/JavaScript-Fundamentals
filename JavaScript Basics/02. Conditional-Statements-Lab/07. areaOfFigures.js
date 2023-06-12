function areoOfFigures(input) {

    let figure = input[0] ; 

    if (figure === "square") {
        let a = Number(input[1]) ; 
        console.log(a * a) ; 

    } else if (figure === "circle") {
        let radius = Number(input[1]) ; 
        console.log(Math.PI * radius * radius) ; 

    } else if (figure === "rectangle") {
        let a = Number(input[1]) ; 
        let b = Number(input[2]) ; 
        console.log(a * b) ; 

    } else if (figure === "triangle") {
        let a = Number(input[1]) ; 
        let b = Number(input[2]) ; 
        console.log(a * b / 2) ; 
    }
}

areoOfFigures(["square", "5"]) ; 
areoOfFigures(["rectangle","7","2.5"])
areoOfFigures(["circle","6"])
areoOfFigures(["triangle","4.5","20"])

