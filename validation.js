function multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'please provide a number'
    }
    const mult =num1*num2;
    return mult;
}
const result =multiply(9,8);
console.log(result);

function join(first, scound){
    if(typeof first !== 'string' || typeof scound !== 'string'){
        return 'provide a string';
    }
    const fullName =first+' '+scound;
    return fullName;
}
const naming =join(7, 'munni');
console.log(naming);