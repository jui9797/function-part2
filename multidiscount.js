/**
 * multilayerd discount
 * first 100 =100
 * 101 to 200 =90
 * 200 up =70
 */
function layeredDiscount(quantity){
   const firstPrice =100;
   const scondPrice =90;
   const thirdPrice =70;

   if(quantity <= 100){
    const total =quantity*firstPrice;
    return total;

   }

    else if(quantity <= 200){
        const firstHalf =firstPrice*100;
        const remain1 =quantity-100;
        const remain1Total =remain1*scondPrice;
        const total2 =firstHalf+remain1Total;
        return total2
    }
    else{
        const first100Total =100*firstPrice;
        const scond100Total =100*scondPrice;
        const scondRemain =quantity-200;
        const firstRemainTotal =scondRemain*thirdPrice;
        const total3 =first100Total+scond100Total+firstRemainTotal;
        return total3
        

    }
}
const layer =layeredDiscount(250);
console.log(layer);