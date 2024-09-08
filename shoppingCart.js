// calculate total products cost
const products =[
    {name:'shampoo', price:400, quantity:3},
    {name:'band', price:100, quantity:7},
    {name:'clip', price:200, quantity:7},
    {name:'lipstic', price:800, quantity:3},
    {name:'makeup', price:1400, quantity:2}
]
function shopingCart(products){
    let total =0
    for(let product of products){
        // console.log(product);
        total =total +product.price;
    }
    return total
}
const totalCost =shopingCart(products);
console.log(totalCost);