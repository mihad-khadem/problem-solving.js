// Given an array,some inputs called fruits
// a.Find the index of 'Banana'
// b.Remove 'Orange' and add 'Watermelon'

// Inputs
var fruits = ['Apple', 'Banana', 'Orange'];
// Index of Banana
index = fruits.indexOf('Banana');
// Replace 'Banana' with 'Mango'
fruits[1] = 'Mango';

// Outputs
console.log(index);
console.log(fruits);
// Removing 'Orange'
fruits.pop();
// Adding 'Watermelon'
fruits.push('Watermelon');
// Last Output:
console.log(fruits);