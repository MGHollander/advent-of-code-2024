const response = await fetch('assignments/day4.txt')
const input = await response.text();

const rows = input.split('\n');
const chars = rows[0].split('');

let xmasCount = 0;
let masCount = 0;

function isXmas(char1, char2, char3) {
    return char1 === 'M' && char2 === 'A' && char3 === 'S';
}

function isMas(char1, char2) {
    return char1 === 'M' && char2 === 'S';
}

for (let x = 0; x < rows.length; x++) {
    for (let y = 0; y < chars.length; y++) {
        const currentChar = rows[x][y];
        if (currentChar === 'X') {
            if (rows[x]) {
                // Horizontal left to right
                if (isXmas(rows[x][y + 1], rows[x][y + 2], rows[x][y + 3])) {
                    xmasCount++;
                }
                // Horizontal right to left
                if (isXmas(rows[x][y - 1], rows[x][y - 2], rows[x][y - 3])) {
                    xmasCount++;
                }
            }

            if (rows[x + 1] && rows[x + 2] && rows[x + 3]) {
                // Vertical top to bottom
                if (isXmas(rows[x + 1][y], rows[x + 2][y], rows[x + 3][y])) {
                    xmasCount++;
                }
                // Vertical top left to bottom right
                if (isXmas(rows[x + 1][y + 1], rows[x + 2][y + 2], rows[x + 3][y + 3])) {
                    xmasCount++;
                }
                // Vertical top right to bottom left
                if (isXmas(rows[x + 1][y - 1], rows[x + 2][y - 2], rows[x + 3][y - 3])) {
                    xmasCount++;
                }
            }

            if (rows[x - 1] && rows[x - 2] && rows[x - 3]) {
                // Vertical bottom to top
                if (isXmas(rows[x - 1][y], rows[x - 2][y], rows[x - 3][y])) {
                    xmasCount++;
                }
                // Vertical bottom right to top left
                if (isXmas(rows[x - 1][y - 1], rows[x - 2][y - 2], rows[x - 3][y - 3])) {
                    xmasCount++;
                }
                // Vertical bottom left to top right
                if (isXmas(rows[x - 1][y + 1], rows[x - 2][y + 2], rows[x - 3][y + 3])) {
                    xmasCount++;
                }
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