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

let partOneTotal = 0;
rowOne.forEach((item, key) => {
  partOneTotal += Math.abs(rowTwo[key] - item);
});

document.getElementById('1.1').innerHTML = partOneTotal;

let partTwoTotal = 0;
rowOne.forEach((itemOne) => {
  let count = 0;
  rowTwo.forEach((itemTwo) => {
    if (itemOne === itemTwo) {
      count++;
    }
  });

  if (count > 0) {
    partTwoTotal += itemOne * count;
  }
});

document.getElementById('1.2').innerHTML = partTwoTotal;

