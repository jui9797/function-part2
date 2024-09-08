// call another function inside a function
function add(num1, num2){
    return num1+num2;

}

function substrac(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function calculate(a,b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'substrac'){
        const result =substrac(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result =multiply(a,b);
        return result;
    }
    else if(operation === 'divide'){
        const result =divide(a,b);
        return result;
    }
    else{
        return 'operation is not allowed'
    }
}

const result =calculate(10,5, 'apply');
console.log(result);