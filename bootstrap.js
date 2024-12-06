const table = document.getElementById('table');
const date = parseInt(`${new Date().getFullYear()}${(new Date().getMonth() + 1)}${new Date().getDate()}`);

for (let i = 1; i < 26; i++) {
    const tr = document.createElement('tr');

    const th = document.createElement('th');
    th.innerHTML = `Day ${i}`;
    tr.appendChild(th);

    const tdOne = document.createElement('td');
    tdOne.setAttribute('id', `${i}.1`)
    tr.appendChild(tdOne);

    const tdTwo = document.createElement('td');
    tdTwo.setAttribute('id', `${i}.2`)
    tr.appendChild(tdTwo);

    const tdThree = document.createElement('td');

    tdThree.innerHTML = (parseInt(`202412${i}`) <= date) ? `<a href="https://adventofcode.com/2024/day/${i}">puzzle</a>` : `N/A`;
    tr.appendChild(tdThree);

    table.appendChild(tr);

}

for (let i = 1; i < 26; i++) {
    const filePath = `./assignments/day${i}.js`;
    const response = await fetch(filePath);
    if (!response.ok) {
        break;
    }
    import(filePath);
}
