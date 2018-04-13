function distance(array) {

    let v1 = array[0] ;
    let v2 = array[1] ;
    let timeinSeconds = array[2] ;

    let distance1 = (v1 * timeinSeconds / 360) * 100 ;
    let distance2 = (v2 * timeinSeconds / 360) * 100 ;

    let distanceFinal = Math.abs(distance1 - distance2) ;

    console.log(distanceFinal) ;

}
distance([5, -5, 40])

