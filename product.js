const products =[
    {name:'shampoo', price:400, quantity:3},
    {name:'band', price:100, quantity:7},
    {name:'clip', price:200, quantity:7},
    {name:'lipstic', price:800, quantity:3},
    {name:'makeup', price:1400, quantity:2}
]
function totalCost(products){
    let total =0;
    for(let product of products){
        console.log(product);
        total+= product.price*product.quantity;
        
    }
    return total;
}
const costTotal =totalCost(products);
console.log(costTotal);