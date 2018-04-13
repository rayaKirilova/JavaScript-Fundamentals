function cone(radius, height){

    let volume = (Math.PI * radius * radius * height) / 3 ;

    let slantHeight = Math.sqrt(radius * radius + height * height) ;

    let area = Math.PI * radius * slantHeight + Math.PI * radius * radius ;

    console.log('volume = ' + volume) ;
    console.log('area = ' + area) ;
}

cone(3, 5)