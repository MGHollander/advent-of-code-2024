const response = await fetch('assignments/day2.txt')
const input = await response.text();
const rows = input.split('\n');
let safeCount = 0;

function analyzeNumbers(numbers, allowedFailures = 0, safe = false, failures = 0) {
    let prevNumber;
    let dir;

    numbers.forEach((item) => {
        let failed = false;

        if (failures > allowedFailures) {
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
                    failures++;
                    failed = true;
                }
            } else if (dir === 'down') {
                const numberTest = prevNumber - 4
                safe = (curNumber < prevNumber && curNumber > numberTest)
                if (!safe) {
                    failures++;
                    failed = true;
                }
            }
        }

        if (!failed) {
            prevNumber = curNumber;
        }
    });

    return [safe, failures];
}

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    let safe = false;
    let failures = 0;

    const numbers = row.split(' ');
    [safe, failures] = analyzeNumbers(numbers);

    if (safe) {
        safeCount++;
    }
}

document.getElementById('2.1').innerHTML = safeCount;

let safeCountPartTwo = 0;

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    let safe = false;
    let failures = 0;

    const numbers = row.split(' ');
    [safe, failures] = analyzeNumbers(numbers, 1);

    if (failures > 1) {
        // If a row has failed, then try to remove each number one by one, to see if the row
        // validates without that one number.
        for (let x = 0; x < numbers.length; x++) {
            failures = 1;
            const newNumbers = row.split(' ');
            newNumbers.splice(x, 1);

            [safe, failures] = analyzeNumbers(newNumbers , 1, safe, failures);

            if (safe) {
                break;
            }
        }
    }

    if (safe || failures < 2) {
        safeCountPartTwo++;
    }
}

document.getElementById('2.2').innerHTML = safeCountPartTwo;
