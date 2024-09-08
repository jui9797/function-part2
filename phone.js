// get the cheapest phone
const phones =[
    {id:1, name:'samsung', price:30000, color:'white'},
    {id:2, name:'xaomi', price:35000, color:'white'},
    {id:3, name:'iphone', price:550000, color:'black'},
    {id:4, name:'vivo', price:60000, color:'white'},
    {id:5, name:'oppo', price:80000, color:'pink'}
]

function getCheap(array){
    let cheap =array[0];
    for(let item of array){
        // console.log(item);
        if(item.price < cheap.price){
            cheap =item;
        }
    }
    return cheap;

}
const cheapPhone =getCheap(phones);
console.log('cheapest phone is:',cheapPhone, 'price', cheapPhone.price);
//cheapest phone is: { id: 1, name: 'samsung', price: 30000, color: 'white' } price 30000



// get the highest price doll
const dolls =[
    {id:1, name:'bear', price:30000, color:'white'},
    {id:2, name:'horse', price:35000, color:'white'},
    {id:3, name:'barbie', price:550000, color:'black'},
    {id:4, name:'marmaid', price:60000, color:'white'},
    {id:5, name:'princess', price:80000, color:'pink'}
]
function getRich(array){
    let richest =array[0];
    for(let doll of dolls){
        console.log(doll);
        if(doll.price> richest.price){
            richest =doll;
        }
    }
    return richest;
}
const doll =getRich(dolls);
console.log('the rich doll is:', doll, 'price is: ', doll.price);
//the rich doll is: { id: 3, name: 'barbie', price: 550000, color: 'black' } price is:  550000