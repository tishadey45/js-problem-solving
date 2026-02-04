// function inchToFeet(inch){
//     const feet=inch / 12;
//     return feet;
// }
// const ongkonHeight= inchToFeet(75);
// console.log(ongkonHeight);

function inchToFeet2(inch){
    const feetFraction = inch/ 12;
    const feetNumber =parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft'+ inchRemaining + 'inch.'
    return result;
}

const ongkonHeight2 = inchToFeet2(100);
console.log(ongkonHeight2);