function chessboard(num) {

    let div = '<div class="chessboard">\n' ;

    for (let j = 0 ; j < num ; j++){

        div += '    <div>\n' ;

        let color = (j % 2 == 0) ? 'black' : 'white' ;

        for (let i = 0 ; i < num ; i++){

            div += `    <span class="${color}"></span>\n`
            color = (color == 'white') ? 'black' : 'white' ;
        }
        div += '    </div>\n' ;
    }

    console.log(div += '</div>')
}
chessboard(3)

