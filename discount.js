/**
 * less than 100 or equal than 100 hole 100 diye gun
 * 101-200 hole 90 diye gun
 * up to 200 hole 70 diye gun.
 */




function discountPrice(quantity){
    if(quantity <= 100){
        const total =quantity*100;
        return total;
    }
    else if(quantity <= 200){
        const total =quantity*90;
        return total;
    }
    else{
        const total =quantity*70;
        return total;
    }
}
const total =discountPrice(120);
console.log(total);