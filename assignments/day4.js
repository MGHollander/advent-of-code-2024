const response = await fetch('assignments/day4-example.txt')
const input = await response.text();

const rows = input.split('\n');
const chars = rows[0].split('');

let wordCount = 0;

function isXmas(char1, char2, char3, char4) {
    return char1 === 'X' && char2 === 'M' && char3 === 'A' && char4 === 'S';
}

for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < chars.length; y++) {
        const currentChar = rows[x][y];
        if (currentChar === 'X') {
            // Horizontal left to right
            if (rows[x] && isXmas(currentChar, rows[x][y + 1], rows[x][y + 2], rows[x][y + 3])) {
                wordCount++;
            }
            // Horizontal right to left
            if (rows[x] && isXmas(currentChar, rows[x][y - 1], rows[x][y - 2], rows[x][y - 3])) {
                wordCount++;
            }
            // Vertical top to bottom
            if (rows[x + 1] && rows[x + 2] && rows[x + 3] && isXmas(currentChar, rows[x + 1][y], rows[x + 2][y], rows[x + 3][y])) {
                wordCount++;
            }
            // Vertical bottom to top
            if (rows[x - 1] && rows[x - 2] && rows[x - 3] && isXmas(currentChar, rows[x - 1][y], rows[x - 2][y], rows[x - 3][y])) {
                wordCount++;
            }
            // Vertical top left to bottom right
            if (rows[x + 1] && rows[x + 2] && rows[x + 3] && isXmas(currentChar, rows[x + 1][y + 1], rows[x + 2][y + 2], rows[x + 3][y + 3])) {
                wordCount++;
            }
            // Vertical top right to bottom left
            if (rows[x + 1] && rows[x + 2] && rows[x + 3] && isXmas(currentChar, rows[x + 1][y - 1], rows[x + 2][y - 2], rows[x + 3][y - 3])) {
                wordCount++;
            }
            // Vertical bottom right to top left
            if (rows[x - 1] && rows[x - 2] && rows[x - 3] && isXmas(currentChar, rows[x - 1][y - 1], rows[x - 2][y - 2], rows[x - 3][y - 3])) {
                wordCount++;
            }
            // Vertical bottom left to top right
            if (rows[x - 1] && rows[x - 2] && rows[x - 3] && isXmas(currentChar, rows[x - 1][y + 1], rows[x - 2][y + 2], rows[x - 3][y + 3])) {
                wordCount++;
            }
        }
    }
}

document.getElementById('4.1').innerText = wordCount;