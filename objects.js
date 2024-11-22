const person = {
    name: "Asif",
    cgpa: 3.999,
    id: "C123",
    eats: function (foodName) {
        console.log(`${this.name} eats ${foodName}`);
    }
}
// Object.freeze(person)
Object.seal(person)
person.name = "Jobair"
delete person.name;
console.log(person.eats("barger"))

// const {id, eats, ...naPerson} = person;
// console.log(naPerson);

person.name = "Jobair";
person.id = "C223060";
// person.eats("Burger")

const keys = Object.keys(person)
const values = Object.values(person)
const entries = Object.entries(person)
// console.log(entries)
// [ 
//     [ 'name', 'Jobair' ], 
//     [ 'cgpa', 3.999 ], 
//     [ 'id', 'C223060' ] 
// ]

// for(const key of keys) {
//     console.log(key, person[key])
// }

// for(const a in person) {
//     console.log(a)
// }