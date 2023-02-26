// BMI = mass / height ** 2 = mass / (height * height)
// (mass in kg & height in meter)

// 1. store Mark's and John's mass and height in variables
// 2. Calculate both their BMI's using the formula you can even implement both versions.
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1 : Marks weights 78 kg and is 1.69 m tall.
// John weight 92 kg and is 1.95 m tall.

// TEST DATA 2 : Marks weights 95 kg and is 1.88 m tall.
// John weights 85 kg & is 1.76 m tall.

// Solution

let massOfMark;
let massOfJohn;
let heightOfMark;
let heightOfJohn;
let bmiOfMark;
let bmiOfJohn;
let markHigherBMI;

// TEST DATA 1
massOfMark = 78; //marks weight in kg
heightOfMark = 1.69; //marks height in meter

// BMI Formula: BMI = mass / height ** 2 = mass / (height * height)

bmiOfMark = massOfMark / heightOfMark ** 2; // bmiOfMark = massOfMark / (heightOfMark * heightOfMark);
console.log(
  "Marks BMI in Test 1 :" + " " + bmiOfMark + " " + "kg/" + "m\u00b2"
);

massOfJohn = 92; //johns weight in kg
heightOfJohn = 1.95; //johns height in meter

bmiOfJohn = massOfJohn / heightOfJohn ** 2; // bmiOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);
console.log(
  "Johns BMI in Test 1 :" + " " + bmiOfJohn + " " + "kg/" + "m\u00b2"
);

// Boolean value
markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);

// TEST DATA 2
massOfMark = 95; //marks weight in kg
heightOfMark = 1.88; //marks height in meter

bmiOfMark = massOfMark / heightOfMark ** 2; // bmiOfMark = massOfMark / (heightOfMark * heightOfMark);
console.log(
  "Marks BMI in Test 2 :" + " " + bmiOfMark + " " + "kg/" + "m\u00b2"
);

massOfJohn = 85; //johns weight in kg
heightOfJohn = 1.76; //johns height in meter

bmiOfJohn = massOfJohn / heightOfJohn ** 2; // bmiOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);
console.log(
  "Johns BMI in Test 2 :" + " " + bmiOfJohn + " " + "kg/" + "m\u00b2"
);

// Boolean value
markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);

// <!       ------------       >

// SOLVED BY TUTOR

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const marksHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, marksHigherBMI);
