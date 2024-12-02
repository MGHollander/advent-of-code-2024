const response = await fetch('assignments/day2.txt')
const input = await response.text();
const rows = input.split('\n');
let safeCount = 0;

rows.forEach((row) => {
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
            }
            else if (dir === 'down') {
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
});

document.getElementById('2.1').innerHTML = safeCount;


