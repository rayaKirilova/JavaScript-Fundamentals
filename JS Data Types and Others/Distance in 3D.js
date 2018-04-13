function distanceIn3D(array) {

    let x1 = array[0] ;
    let y1 = array[1] ;
    let z1 = array[2] ;

    let x2 = array[3] ;
    let y2 = array[4] ;
    let z2 = array[5] ;

    let distanceX = Math.pow((x1 - x2) , 2) ;
    let distanceY = Math.pow((y1 - y2) , 2) ;
    let distanceZ = Math.pow((z1 - z2) , 2) ;

    let distance = Math.sqrt(distanceX + distanceY + distanceZ) ;

    console.log(distance) ;
}

distanceIn3D([3.5, 0, 1, 0, 2, -1])