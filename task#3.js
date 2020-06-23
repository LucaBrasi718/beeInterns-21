const year = 100;
const year2 = 1701;

function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(year));
console.log(centuryFromYear(year2));