const num = [1, 30, 5, 7, 0]
const s = num.reduce((sum, x) => {
    if(x % 2 == 0)
        return sum + x;
    else return sum + 0;
}, 0)
console.log(s)


let sum = 0;
for(let i = 0; i < num.length; i++)
    sum = sum + num[i];

console.log(sum)


const gt4 = num.filter(x => x >= 4)
console.log(gt4)

const gt4_find = num.find(x => x >= 4)
console.log(gt4_find)

