//** Question **//
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8

// Must contain at least 1 number

// Must contain at least 1 uppercase letter

// Must not contain spaces

// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }


function checkPassword(password){
    let reasons = [];
    let length = password.length;

    let hasUppercase = false;
    let hasNumber = false;

    for(let i =0; i< length; i++){
        let character =password[i];
        // console.log(character);
        if(character>='0'&& character <='9'){
            hasNumber = true;
        }
        if(character >='A'&& character <='Z'){
            hasUppercase = true;
        }
    }
 console.log(password,length,hasUppercase,hasNumber);
 if(hasNumber == false){
    reasons.push("missing number");
 }
 if(hasUppercase == false){
    reasons.push("missing uppercase");
 }
 console.log(password.includes(" "));
 let isValid =reasons.length ==0;
 console.log(isValid);
 return{
    valid:isValid,
    // Valid:reasons.length ===0,
    reasons: reasons,

 }
}
// let output = checkPassword("helloWorld5");
// let output = checkPassword("hello123");
let output = checkPassword("helloWorld");
console.log(output);


// ***Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }
