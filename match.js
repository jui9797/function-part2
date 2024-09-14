const products =[
    {id :1, name: 'xaimi phone', price:1900},
    {id :2, name: 'lenovo laptop', price:100900},
    {id :3, name: 'iphone 15 pro', price:9900},
    {id :4, name: 'vivo lite 12', price:10000},
    {id :5, name: 'hp laptop', price:20000},
    {id :6, name: 'mac book air', price:349000},
    {id :7, name: 'xaimi phone', price:6900},
    {id :8, name: 'vivo phone', price:17000},
]

function matchProducts(products, search){
    const match =[];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product);
        }
    }
    return match;
}
const result =matchProducts(products, '12');
console.log(result);