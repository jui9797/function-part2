// amar kache akta array te kichu number ache sob cheye boro number ta ber korte hobe
const number =[12,34,1000,87,656];
function getBig(number){
    if(!Array.isArray(number)){
        return 'provide an array...'
    }
    let big =number[0];
for(let item of number){
    if(item> big){
        big =item
    }
}
return big;
}
const bigNumber =getBig(number);
console.log(bigNumber);
const bigNumber2 =getBig('string');
console.log(bigNumber2);

// Amar nam jui amr basa Naogaon.
function getMe(){
    if(typeof me !== 'object'){
        return 'provide an object....!'
    }
    const mySelf =`Amar nam  ${me.name} amar basa  ${me.address} .`;
    return mySelf;
}

const me ={
    name:'jui',
    address :'Naogaon',
}
const mySelf =getMe(me);
console.log(mySelf);


// apnar monthly khoroch, house rent 5000, food 3000, hat khoroch 2000 mash sesh a apnar savings koto hobe? apnar income ar opr vitti kore.
function getSavings(money){
    if(typeof money !== 'number'){
        return 'invalid input'
    }
    const houseRent =5000;
    const food =3000;
    const cost =2000;
    const totalCost =houseRent+food+cost;
    const savings =money-totalCost;
    if(totalCost> money){
        return 'earn more...'
    }
    return savings;
}
const salary =getSavings(5000);
console.log(salary);


// akta array ar moddhe koita boolean value ache ta count kore dekhan
const myArray =[2,4,'8,', true, 'apple',false, {name:'jui'},false];
function countBoolean(array){
    if(!Array.isArray(array)){
        return 'please provide an array'
    }

    let count =0;
    for(let item of array){
    if(typeof item === 'boolean'){
        count++;
    }
}
return count;
}
const findBoolean =countBoolean(myArray)
console.log(findBoolean);


// akta biye te borjatri 1 ta bus a jete parbe 50 jon, 1 ta micro te jabe 15 jon, baki borjatri richshaw te jabe .richshaw vara per borjatri 20 taka. borjatrir number onujayi kotojon richshaw te jabe?
// bus =50;
// micro =15;
// rickshaw =20taka;

function rickshawCost(peoples){
    const bus =50;
    const micro =15;
    const rickshawCost =20;

    const busRemainPeople =peoples % bus;
    const microRemainPeople =busRemainPeople % micro;
     

    return microRemainPeople * rickshawCost;
}

const borjatri =rickshawCost(234);
console.log(borjatri);


// total marks 80 hole job pabe noito pabena
const person1 ={
    name:'hablu',
    hsc:25,
    hons:34,
    isFFFamily:true,
}
const person2 ={
    name:'boluk',
    hsc:30,
    hons:39,
    isFFFamily:false,
}

function jobSelection(info){
    if(typeof info !== 'object'){
        return 'invalid input'
    }

    let totalMarks =info.hsc+ info.hons;
    

    if(info.isFFFamily){
        totalMarks =totalMarks + totalMarks *.2;
    }

    if(totalMarks>= 80){
        return 'you get a job'
    }
    else{
        return 'you failed'
    }
}
const candidate = jobSelection(person1);
console.log(candidate);