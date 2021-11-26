let length = 3
let level = length;

function click(n, m) {
    n = n - 1;
    level = ((n % m) + m) % m
    return level;
}

for (let i = 0; i < 20; i++) {
    console.log(click(level, length))
}
// if (level === length - 1) { show all but last since its always showing}
// else { hide level[level + 1]}