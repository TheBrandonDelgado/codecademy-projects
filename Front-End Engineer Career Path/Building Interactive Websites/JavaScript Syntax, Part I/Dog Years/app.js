const myAge = 24;
/* First two years of life will be equal to 10.5 dog years */
let earlyYears = 2;
earlyYears *= 10.5;
/* After the first two years of life, human years will be equal to 4 dog years */
let laterYears = myAge - 2;
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Brandon'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);