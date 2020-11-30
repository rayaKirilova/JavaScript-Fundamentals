function figureArea(input, num1, num2){
    let area = 0 ; 

    if (input === "square"){
        area = Number(num1) * Number(num1) ;     
    } else if (input === "rectangle"){
        area = Number(num1) * Number(num2) ; 
    } else if (input === "triangle") {
        area = Number(num1) * Number(num2) / 2 ;
    } else if (input === "circle"){
        area = Math.PI * Number(num1) * Number(num1) ;
    }

    console.log(area.toFixed(3));
}

figureArea("square", 5);
figureArea("rectangle", 7, 2.5);
figureArea("circle", 6);
figureArea("triangle", 4.5, 20);