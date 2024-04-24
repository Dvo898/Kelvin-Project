// Kelvin Weather Project 
// Using const to store a value that would not be able to change. 
const Kelvin = 0;
// Celcious is 273 degrees less tha Kelvin - Declare Celcius with constant 
// Subtratr 273 from Kelvin to get Celcius value 
const Celcius = Kelvin-273;
// Using Math object to round the number that generated from the equation 
const equation = Celcius*(9/5)+32;
let fahrenheit = Math.round(equation);
// Using Math.floor() to round down the value and save value in variable fahrenheit
fahrenheit = Math.floor(equation);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let Newton = Math.floor(Celcius*(33/100));
console.log(`Convert celsius to the Newton:${Newton}`);
