/* Created a variable for the temperature in Kelvin */
let kelvin = 0;

/* Created a variable for the temperature in Celcius */
let celsius = kelvin - 273;

/* Created a variable for the temperature in Fahrenheit*/
let fahrenheit = celsius * (9/5) + 32;

/* Reassigned the fahrenheit variable to be rounded down */
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);