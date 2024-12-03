const response = await fetch('assignments/day3.txt')
const input = await response.text();

const regex = /mul\([(0-9]{1,3},[0-9]{1,3}\)/g;
const records = input.match(regex);

let totalPartOne = 0;
for (let i = 0; i < records.length; i++) {
    const mul = records[i].replace(/mul\(([(0-9]{1,3},[0-9]{1,3})\)/, '$1').split(',');
    totalPartOne += parseInt(mul[0]) * parseInt(mul[1]);
}

document.getElementById('3.1').innerText = totalPartOne;
