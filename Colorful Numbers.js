function colorfulNums(number) {

    let html = '<ul>\n';

    for (let i = 1; i <= number; i++) {
        let color = 'blue';

        if (i % 2 != 0) {
            color = 'green';
        }
        html += `  <li><span style='color: ${color}'>${i}</span></li>\n`;
    }

    html += '</ul>';
    console.log(html);
}

colorfulNums(10);
