


const cube = x => x * x * x;
function fun(y, cb) {   // y = 5, cb = cube
    let r = cb(y);
    return r;
}

// console.log(fun(5, cube));

// const sqr = function (x) { 
//     return x * x;
// }
const num = [1, 3, 5, 7]
const squareArr = num.map(x => x * x)
// console.log(squareArr)
// console.log(num)

const people = ["Asif", "jobair", "Johur"]
const lengthArr = people.map(x => {
    if(x == "Johur") return x + " class e ghumay";
    else return x + " valo chele";
}) 
console.log(lengthArr)
