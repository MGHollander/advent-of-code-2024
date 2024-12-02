const response = await fetch('assignments/day2.txt')
const input = await response.text();
const rows = input.split('\n');
let safeCount = 0;

for (let i = 0; i < 1000; i++) {
    let row = rows[i];
    let safe = false;
    let failed = false;
    let prevNumber;
    let dir;

    rows[i].split(' ').forEach((item) => {
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
        safeCount = safeCount + 1;
    }
}

document.getElementById('day2').innerHTML = safeCount;


