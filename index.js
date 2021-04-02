"use strict";
//---------------------------------------------------------------------------------------------
// age array practice
// define initial array values
let ages = [3,9,23,64,2,8,28,93];
console.log("Ages:" + ages);
let agesResult = ages[ages.length - 1] - ages[0];
console.log(`Subtract first from last = ${agesResult}`);
// Push a new age onto the end of the array
ages.push(26);
agesResult = ages[ages.length - 1] - ages[0];
console.log("Ages:" + ages);
console.log(`Subtract first from last after pushing additional age on array = ${agesResult}`);
// use loop to calc average age
let ageSum = 0;
let age = 0;
for (age of ages){
    ageSum += age;
    //console.log(ageSum);
}
let ageAvg = ageSum / ages.length;
console.log(`Average of ${ages.length} ages with accum of ${ageSum} is ${ageAvg.toFixed(2)}`);
//---------------------------------------------------------------------------------------------
// name array practice
let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
// use loop to calc avg number of characters in names
let sumChars = 0;
let nameString = '';
let name = '';
for (name of names){
    sumChars += name.length;
    nameString += (name + ' ');
}
let namesAvg = sumChars / names.length;
nameString = nameString.trim();
console.log(names);
console.log(`Avg name length in characters is ${namesAvg}`);
console.log(`Name list method 1 loop *${nameString}*`)
// we can also do this with an the join array method
nameString = names.join(" ");
console.log(`Name list method 2 array.join *${nameString}*`)
//---------------------------------------------------------------------------------------------
// last element / first element
function lastElement(array){
    return array[array.length - 1];
}
function firstElement(array){
    return array[0];
}
console.log(`First element of names ${firstElement(names)}`);
console.log(`Last element of names ${lastElement(names)}`);
//---------------------------------------------------------------------------------------------
// use map method to create new array
let nameLengths = names.map(calcNameLen);
function calcNameLen(value, index, array){
    return value.length;
}
console.log(`NameLengths Array: ${nameLengths}`);
let elementSum = 0;
let nameLen = 0;
for (nameLen of nameLengths){
    elementSum += nameLen;
}
console.log(`NameLengths sum: ${elementSum}`);
//---------------------------------------------------------------------------------------------
// function to repeat concat of string
function concatRepeat(word, n){
    let repeatWord = '';
    for (let i = 0; i < n; i++){
        repeatWord += word;
    }
    return repeatWord;
}
console.log(`Repeat concat: ${concatRepeat('Fred',3)}`);

// function to concat first and last into full name

function fullName(first, last){
    return first + ' ' + last;
}
console.log(`Full name: ${fullName("Fred", "Smith")}`);

// function to return true of sum of values in array is > 100
function sumExceeds(array, value){
    let arraySum = 0;
    let element = 0;
    for (element of array){
        arraySum += element;
        // debug statement console.log(element + " " + arraySum);
    }
    return (arraySum > value);
}
console.log(`Is sum of nameLengths > 100? ${sumExceeds(nameLengths, 100)}`);
console.log(`Is sum of nameLengths > 23? ${sumExceeds(nameLengths, 23)}`);
console.log(`Is sum of nameLengths > 22? ${sumExceeds(nameLengths, 22)}`);
console.log(`Is sum of nameLengths > 24? ${sumExceeds(nameLengths, 24)}`);

// function to return average of values in an array
function arrayAvg(array) {
    let elementSum = 0;
    let element = 0;
    for (element of array) {
        elementSum += element;
    }
    return elementSum / array.length;
}
console.log(`Avg of nameLengths: ${arrayAvg(nameLengths)}`);

// function to return true if avg of array 1 > avg of array 2
function avgCompare(array1, array2){
    return (arrayAvg(array1) > arrayAvg(array2));
}
console.log(`Is avg of ages > avg of nameLengths? ${avgCompare(ages, nameLengths)}`);
console.log(`Is avg of nameLengths > avg of age? ${avgCompare(nameLengths, ages)}`);

// function  willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket){
    return (isHotOutside && (moneyInPocket > 10.50));
}
console.log(`If hot outside and $12 in pocket will buy drink? ${willBuyDrink(true, 12)}`);
console.log(`If cold outside and $12 in pocket will buy drink? ${willBuyDrink(false, 12)}`);
console.log(`If hot outside and $10 in pocket will buy drink? ${willBuyDrink(true, 10)}`);
console.log(`If cold outside and $10 in pocket will buy drink? ${willBuyDrink(false, 10)}`);

// function to calculate change

// Let's continue to develop the change calculation logic - set it up as a function
// that is passed the amount owed and the amount tendered and
// returns a multi dimensional array of bills/coins and denomination quantities
// [[bill, qty],[bill,qty],[coin,qty]]

function calculateChange(owed, tendered) {
    // define denominations
    let denominations = ["Twenty", "Ten", "Five", "One", "Quarter", "Dime", "Nickel", "Pennie"];
    let denomAmounts = [20, 10, 5, 1, .25, .10, .05, .01];
    let remainingOwed = (tendered - owed).toFixed(2);
    console.log(`Money Tendered: ${tendered} Amount owed: ${owed} Change Due: ${remainingOwed}`);
    let changeArray = [];
    let i = 0;
    let denomQty = 0;
    for (i in denominations) {
        denomQty = (remainingOwed - (remainingOwed % denomAmounts[i])) / denomAmounts[i];
        remainingOwed -= (denomQty * denomAmounts[i]);
        remainingOwed = remainingOwed.toFixed(2);
        if (denomQty != 0){
            let denomArray = [];
            denomArray.push(denominations[i]);
            denomArray.push(denomQty);
            changeArray.push(denomArray);
        }
        //console.log(`${denominations[i]} number of bills/coins ${denomQty}`);
    }
    return changeArray;
}

// let's test the function 
let change = [];
for (change of (calculateChange(2.94, 20))){
    console.log(`${change[0]}s : ${change[1]}`);
}