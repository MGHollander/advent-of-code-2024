const response = await fetch('assignments/day2.txt')
const input = await response.text();
const rows = input.split('\n');
let safeCount = 0;

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    let safe = false;
    let failed = false;
    let prevNumber;
    let dir;

    row.split(' ').forEach((item) => {
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

    if (safe) {
        safeCount++;
    }
}

document.getElementById('2.1').innerHTML = safeCount;

let safeCountPartTwo = 0;

function analyzeNumbersForPartTwo(numbers, safe, failures) {
    let prevNumber;
    let dir;

    numbers.forEach((item) => {
        let failed = false;

        if (failures > 1) {
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
    [safe, failures] = analyzeNumbersForPartTwo(numbers, safe, failures);

    if (failures > 1) {
        failures = 1;
        numbers.shift();

        [safe, failures] = analyzeNumbersForPartTwo(numbers, safe, failures);

        if (failures > 1) {
            console.log(i, {row, safe, failures});
        }
    }

    if (safe || failures < 2) {
        safeCountPartTwo++;
    }
}

// 657 wrong

document.getElementById('2.2').innerHTML = safeCountPartTwo;
