function gramophone(bandName, albumName, songName){
 
    let durationInSeconds = albumName.length * bandName.length * songName.length / 2 ; 

    let rotationCount = Math.ceil(durationInSeconds / 2.5) ; 

    console.log((`The plate was rotated ${rotationCount.toFixed(0)} times.`)) ; 
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')