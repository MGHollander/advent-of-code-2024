const response = await fetch('assignments/day2.txt')
const input = await response.text();
const rows = input.split('\n');
let safeCount = 0;
let safeCountPartTwo = 0;

function isSafeReport(numbers) {
    let dir;
    let failed = false;
    let prevNumber;
    let safe = false;

    numbers.forEach((item) => {
        if (failed) {
            return;
        }

        const curNumber = parseInt(item);
        if (prevNumber) {
            if (!dir) {
                dir = (curNumber > prevNumber) ? 'up' : 'down';
            }

            if (dir === 'up') {
                const numberTest = prevNumber + 4
                safe = (curNumber > prevNumber && curNumber < numberTest)
                if (!safe) {
                    failed = true;
                }
            } else if (dir === 'down') {
                const numberTest = prevNumber - 4
                safe = (curNumber < prevNumber && curNumber > numberTest)
                if (!safe) {
                    failed = true;
                }
            }
        }

        prevNumber = curNumber;
    });

    return safe;
}


for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const numbers = row.split(' ');
    let safe = isSafeReport(numbers);

    if (safe) {
        safeCount++;
    } else {
        // If a row has failed, then try to remove each number one by one, to see if the row
        // validates without that one number.
        for (let x = 0; x < numbers.length; x++) {
            const newNumbers = row.split(' ');
            newNumbers.splice(x, 1);

            safe = isSafeReport(newNumbers);

            if (safe) {
                break;
            }
        }
    }

    if (safe) {
        safeCountPartTwo++;
    }
}

document.getElementById('2.1').innerHTML = safeCount;
document.getElementById('2.2').innerHTML = safeCountPartTwo;
