// chair= 3ft
// table= 10ft
// bad= 50ft
function woodQuality(chair, table, bed){
    const perChair =5;
    const perTable =10;
    const perBed =15;
     const chairWood =chair*perChair;
     const tableWood = table *perTable;
     const bedWood = bed *perBed;

     const totalWood =chairWood+ tableWood+ bedWood;
     return totalWood;
}
const quantity =woodQuality(4,2,1);
console.log('wood we need', quantity);




function productCost(shirt, pant, belt, shoes){
    let perShirt =500;
    let perPant =300;
    let perBelt =100;
    let perShoes =500;
    const shirtCost =shirt*perShirt;
    const pantCost =pant*perPant;
    const beltCost =belt*perBelt;
    const shoeCost =shoes*perShoes;

    const totalProductCost =shirtCost +pantCost +beltCost +shoeCost;
    return totalProductCost;
}
const weNeed =productCost(2, 2, 2,2);
console.log(weNeed);