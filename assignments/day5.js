const response = await fetch('assignments/day5.txt')
const input = await response.text();

const rows = input.split('\n');

let total = 0;
const validateBefore = [];
const validateAfter = [];

function isValidUpdate(pageNumbers) {
    let validRow = true;

    for (let i = 0; i < pageNumbers.length; i++) {
        const pageNr = pageNumbers[i];

        for (let index = 0; index < validateBefore.length; index++) {
            const rule = validateBefore[index];
            if (pageNr === rule) {
                // Skip validation if number to validate against is not in the current page numbers update.
                if (pageNumbers.indexOf(validateAfter[index]) > -1) {
                    const isBefore = pageNumbers.indexOf(pageNr) < pageNumbers.indexOf(validateAfter[index]);
                    if (!isBefore) {
                        validRow = false;
                        break;
                    }
                }
            }
        }

        if (!validRow) {
            continue;
        }

        for (let index = 0; index < validateAfter.length; index++) {
            const rule = validateAfter[index];
            if (pageNr === rule) {
                // Skip validation if number to validate against is not in the current page numbers update.
                if (pageNumbers.indexOf(validateBefore[index]) > -1) {
                    const isAfter = pageNumbers.indexOf(pageNr) > pageNumbers.indexOf(validateBefore[index]);
                    if (!isAfter) {
                        validRow = false;
                        break;
                    }
                }
            }
        }
    }

    return validRow;
}

rows.forEach((row) => {
    if (row.split('').find((c) => c === '|')) {
        const pageNr = row.split('|');
        validateBefore.push(pageNr[0]);
        validateAfter.push(pageNr[1]);
    }

    if (row.split('').find((c) => c === ',')) {
        const pageNumbers = row.split(',');

        if (isValidUpdate(pageNumbers)) {
            // Get the page number in the center of the update and add it up to the total.
            total += parseInt(pageNumbers[Math.floor(pageNumbers.length / 2)]);
        }
    }
});

document.getElementById('5.1').innerText = total;
