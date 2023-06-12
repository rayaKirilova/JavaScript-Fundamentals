function distanceBetweenPoints(x1, y1, x2, y2){

    let xPoints = (x2 - x1) * (x2 - x1) ; 
    let yPoints = (y2 - y1) * (y2 - y1) ; 

    let distance = Math.sqrt(xPoints + yPoints) ; 

    console.log(distance) ; 

}

distanceBetweenPoints(2, 4, 5, 0) ; 