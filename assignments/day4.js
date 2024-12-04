const response = await fetch('assignments/day4.txt')
const input = await response.text();

const rows = input.split('\n');
const chars = rows[0].split('');

let xmasCount = 0;
let masCount = 0;

function isXmas(char1, char2, char3, char4) {
    return char1 === 'X' && char2 === 'M' && char3 === 'A' && char4 === 'S';
}

function isMas(char1, char2) {
    return char1 === 'M' && char2 === 'S';
}

for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < chars.length; y++) {
        const currentChar = rows[x][y];
        if (currentChar === 'X') {
            // Horizontal left to right
            if (rows[x] && isXmas(currentChar, rows[x][y + 1], rows[x][y + 2], rows[x][y + 3])) {
                xmasCount++;
            }
            // Horizontal right to left
            if (rows[x] && isXmas(currentChar, rows[x][y - 1], rows[x][y - 2], rows[x][y - 3])) {
                xmasCount++;
            }
            // Vertical top to bottom
            if (rows[x + 1] && rows[x + 2] && rows[x + 3] && isXmas(currentChar, rows[x + 1][y], rows[x + 2][y], rows[x + 3][y])) {
                xmasCount++;
            }
            // Vertical bottom to top
            if (rows[x - 1] && rows[x - 2] && rows[x - 3] && isXmas(currentChar, rows[x - 1][y], rows[x - 2][y], rows[x - 3][y])) {
                xmasCount++;
            }
            // Vertical top left to bottom right
            if (rows[x + 1] && rows[x + 2] && rows[x + 3] && isXmas(currentChar, rows[x + 1][y + 1], rows[x + 2][y + 2], rows[x + 3][y + 3])) {
                xmasCount++;
            }
            // Vertical top right to bottom left
            if (rows[x + 1] && rows[x + 2] && rows[x + 3] && isXmas(currentChar, rows[x + 1][y - 1], rows[x + 2][y - 2], rows[x + 3][y - 3])) {
                xmasCount++;
            }
            // Vertical bottom right to top left
            if (rows[x - 1] && rows[x - 2] && rows[x - 3] && isXmas(currentChar, rows[x - 1][y - 1], rows[x - 2][y - 2], rows[x - 3][y - 3])) {
                xmasCount++;
            }
            // Vertical bottom left to top right
            if (rows[x - 1] && rows[x - 2] && rows[x - 3] && isXmas(currentChar, rows[x - 1][y + 1], rows[x - 2][y + 2], rows[x - 3][y + 3])) {
                xmasCount++;
            }
        }

        if (currentChar === 'A') {
            if (rows[x - 1] && rows[x + 1]) {
                // Top left to bottom right and top right to bottom left
                if (isMas(rows[x - 1][y - 1], rows[x + 1][y + 1]) && isMas(rows[x - 1][y + 1], rows[x + 1][y - 1])) {
                    masCount++;
                }
                // Top right to bottom left and bottom right to top left
                if (isMas(rows[x - 1][y + 1], rows[x + 1][y - 1]) && isMas(rows[x + 1][y + 1], rows[x - 1][y - 1])) {
                    masCount++;
                }
                // Bottom right to top left and bottom left to top right
                if (isMas(rows[x + 1][y + 1], rows[x - 1][y - 1]) && isMas(rows[x + 1][y - 1], rows[x - 1][y + 1])) {
                    masCount++;
                }
                // Bottom left to top right and top left to bottom right
                if (isMas(rows[x + 1][y - 1], rows[x - 1][y + 1]) && isMas(rows[x - 1][y - 1], rows[x + 1][y + 1])) {
                    masCount++;
                }
            }
        }
    }
}

document.getElementById('4.1').innerText = xmasCount;
document.getElementById('4.2').innerText = masCount;