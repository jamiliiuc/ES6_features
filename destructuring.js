const num = [1, 2, 3, 5]
// let f = num[0]
// let s = num[1]
// let [f, s] = num
// console.log(f, s)

function r()
{
    let sum = 5;
    let mult = 6;
    return [sum, mult];
}

let [a, b] = r();
console.log(a, b)


const person = {
    name: "Asif",
    cgpa: 3.999,
    id: "C123"
}

let {cgpa, age} = person

console.log( cgpa, age)