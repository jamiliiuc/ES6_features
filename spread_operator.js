// const num = [1, 6, [1, 2, 3], 7]
const num1 = [1, 6, 7]
const num2 = [3, 2, 70]
const numcat = [...num1, ...num2]
// console.log([2, 3, ...num1, 5, 7])
// console.log(numcat)

// const mx = Math.max(num);
// const mx = Math.max(2, 3, 4);
const mx = Math.max(...num1);
// console.log(mx)


// spread oeparator on object
// const person = {
//     name: "Asif",
//     cgpa: 3.999
// }
// console.log(person)