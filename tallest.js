const numbers =[78,98,567,879,456,989786];
function getTallest(array){
    let max =numbers[0];
    for(let num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}
const tallest =getTallest(numbers);
console.log(tallest);



const lowest =[23,67,87,56,78];
function getLowest(array){
    let low =array[0];
    for(let item of array){
        if(item < low){
            low = item;
        }
    }
    return low;
}
const lowNumber =getLowest(lowest);
console.log(lowNumber);