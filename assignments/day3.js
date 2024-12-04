const response = await fetch('assignments/day3.txt')
const input = await response.text();

const regex = /mul\([(0-9]{1,3},[0-9]{1,3}\)/g;
const records = input.match(regex);

function parseMultipliers(records) {
    let total = 0;

    for (let i = 0; i < records.length; i++) {
        const mul = records[i].replace(/mul\(([(0-9]{1,3},[0-9]{1,3})\)/, '$1').split(',');
        total += parseInt(mul[0]) * parseInt(mul[1]);
    }

    return total;
}

let totalPartOne = parseMultipliers(records);

document.getElementById('3.1').innerText = totalPartOne;

const regexPartTwo = /do\(\)(.*?)don't\(\)|do\(\)(.*)/g;
const recordspartTwo = input.match(regexPartTwo);

let totalPartTwo = 0;

for (let i = 0; i < recordspartTwo.length; i++) {
    const records = recordspartTwo[i].match(regex);
    totalPartTwo += parseMultipliers(records);
}

document.getElementById('3.2').innerText = totalPartTwo;