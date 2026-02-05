//** Question **//
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

function analyzeMarks(marksObj){
//   return marksObj;
console.log(marksObj);
let total = 0;

let highestMark = -Infinity;
let lowestMark = Infinity;

let highestSubject = null;
let lowestSubject = null;

for(let subject in marksObj){
    let mark = marksObj[subject];
    total += mark;
    // console.log(object ,"->",value);
    if(mark > highestMark){
        highestMark = mark;
        highestSubject = subject;

    }
    if(mark < lowestMark){
        lowestMark = mark;
        lowestSubject = subject;
        
    }
    }
    console.log('highestMark ->', highestMark);
    console.log('lowestMark ->', lowestMark);
    console.log('highest subject ->', highestSubject);
    console.log('lowest subject ->', lowestSubject);
let average = total / Object.keys(marksObj).length;
// console.log('Total ->',total);
// console.log('average ->', average);

return{
    total : total,
    average : average,
    highestSubject : highestSubject,
    lowestSubject : lowestSubject,
};
}
let output = analyzeMarks({math:78,english:65,physics:88,bangla:55})
console.log(output);