const response = await fetch('assignments/day1.txt')
const input = await response.text();

const rowOne = [];
const rowTwo = [];

input.split('\n').forEach((item) => {
  const [n1, n2] = item.split('   ');
  rowOne.push(parseInt(n1));
  rowTwo.push(parseInt(n2));
});

rowOne.sort();
rowTwo.sort();

const diff = [];
for (let i = 0; i < rowOne.length; i++) {
  diff.push(Math.abs(rowTwo[i] - rowOne[i]));
}

const total = diff.reduce((acc, cur) => acc + cur, 0);

document.getElementById('day1').innerHTML = total;


