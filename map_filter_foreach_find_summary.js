const products = [
    {id: 1, name: "iPhone", price: 120000},
    {id: 2, name: "xiaomi", price: 20000},
    {id: 3, name: "motorolla", price: 0},
    {id: 4, name: "samsung", price: 50000}
]

console.log(products.map(product => {if(product.price > 20000) return product.name;} ))