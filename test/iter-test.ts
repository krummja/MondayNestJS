
const data = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [],
];

let limit = 5;
let total = 0;
let lastLength = 0;
let page = 0;

while (true) {
    const current = data[page];
    total += current.length;

    page++;

    if (current.length === 0 || total % limit > 0) break;
}

console.log(total);
