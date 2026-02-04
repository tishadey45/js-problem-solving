function  bariteJabo(biye){
    // console.log('ami a bari theke oi barite jabo',biye);
    // console.log("ami gazariya theke",biye,"jabo");
}
bariteJabo("moniram");

let num1 =150;
let num2 =100;

let sum = num1 + 2;
console.log(sum);

function checkEvenSumThenDoSomething(num1,num2){
   let sum = num1 + num2;
//    console.log(sum);
   if(sum % 2 == 0){
    // console.log("yes this is even number");
    // console.log("i do something");
   }else{
    // console.log("no this is odd number");
    // console.log("i do something");

   }
}

checkEvenSumThenDoSomething(50,100);
checkEvenSumThenDoSomething(45,64);
checkEvenSumThenDoSomething(num1,num2);

// *** return ***
function tumiSoreDarao(num1,num2){
    let sum = num1 + num2;
    let result = sum * 5;
    return result;
}

let result = tumiSoreDarao(3,2);
// console.log(result);


    // ***array***
function sumArray(arr){
    // console.log(arr);
    let sum = 0;
    for(let number of arr){
        // sum= sum+number;
        sum +=number;
    }
    // console.log(sum);
    return sum;
}

let sumOfArr= sumArray([20,15,27,50,29]);
// console.log(sumOfArr);


    // ***object***
function tumiBadBoy(obj){
    // console.log(obj);
    let count = Object.keys(obj).length;
    // console.log(count);
}   
tumiBadBoy({name:"tisha",age:21,roll:112});    