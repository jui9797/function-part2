// big or small
function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }
    return num2;
}
const numbers =getMax(167,876);
console.log('Max of two is:', numbers);

// 3 numbers
const jim =561;
const tim =89;
const kim =98;
if(jim>tim && jim>kim){
    console.log('jim is the biggest')
}
else if(tim>jim && tim>kim){
    console.log('tim is the biggest')
}
else{
    console.log('kim is the biggest')
}

function getBig(num1, num2,num3 ){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{return num3}
}
const number =getBig(56,67,698);
console.log('big number is:', number)

// getting maximum more than three
const max =Math.max(5,67,87,987,45);
console.log('max isusing Math.max:', max);
