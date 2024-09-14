/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function getSmallest(array){
    let small =array[0];
    for(let word of array){
        // console.log(word)
        if(word.length < small.length){
         small =word;
        }
    }
    return small;
}
const height =getSmallest(heights2);
console.log(height);