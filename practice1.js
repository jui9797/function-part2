/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(array){
    let low =array[0];
    for(let item of array){
      if(item < low){
        low =item
      }
    }
    return low
}
const height =lowestNumber(heights2);
console.log(height);

const height3 =Math.min(167, 190, 120, 165, 137)
console.log(height3)