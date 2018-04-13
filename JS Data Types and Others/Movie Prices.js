function ticketPrice(input) {

    let movie = input[0];
    let dayOfWeek = input[1];
    let price = 0;

    if (dayOfWeek.toLowerCase() === 'monday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 12;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 8.50;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 8;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 10;
        }
    } else if (dayOfWeek.toLowerCase() === 'tuesday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 10;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 8.50;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 8;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 10;
        }
    } else if (dayOfWeek.toLowerCase() === 'wednesday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 15;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 8.50;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 8;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 10;
        }
    } else if (dayOfWeek.toLowerCase() === 'thursday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 12.50;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 8.50;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 8;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 10;
        }
    } else if (dayOfWeek.toLowerCase() === 'friday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 15;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 8.50;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 8;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 10;
        }
    } else if (dayOfWeek.toLowerCase() === 'saturday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 25;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 15;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 10;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 15;
        }
    } else if (dayOfWeek.toLowerCase() === 'sunday') {
        if (movie.toLowerCase() === 'the godfather') {
            price = 30;
        } else if (movie.toLowerCase() === 'schindler\'s list') {
            price = 15;
        } else if (movie.toLowerCase() === 'casablanca') {
            price = 10;
        } else if (movie.toLowerCase() === 'the wizard of oz') {
            price = 15;
        }
    } else {
        console.log('error') ;
    }
    console.log(price) ;
}
ticketPrice(['casablanca' , 'sunday'])