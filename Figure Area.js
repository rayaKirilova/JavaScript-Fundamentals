function figureArea (w , h , W , H) {

    let firstFigureArea = w * h ;
    let secondFigureArea = W * H ;
    let thirdFigureArea = Math.min(w, W) * Math.min(h, H) ;

    let area = firstFigureArea + secondFigureArea - thirdFigureArea ;

    console.log(area) ;
}

figureArea(13, 2 , 5 ,8);