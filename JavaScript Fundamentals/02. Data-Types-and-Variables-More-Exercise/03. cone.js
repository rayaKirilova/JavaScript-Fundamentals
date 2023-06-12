function cone(radius, height) {

    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let slantHeight = Math.sqrt(radius * radius + height * height) ; 
    let lateralSurface = Math.PI * radius * slantHeight ; 
    let baseSurface = Math.PI * radius * radius ; 
    
    let totalSurfaceArea = lateralSurface + baseSurface ; 

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3, 5) ; 
cone(3.3, 7.8)