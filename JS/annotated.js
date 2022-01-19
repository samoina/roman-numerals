//add the value of all the symbols, 
//exception is that they may not be three of same characters in a row. so you switch to subtraction eg it is not IIII, it is IV, and 90 is not LXXXX, it is XC
//Separate ones, tens, hundreds, thousands. You cannot count higher than 3999 in Roman numbers
//I, V, X, L, C, D, M - 1, 5, 10, 50, 100, 500, 1000
// I, II, III, IV, V, VI, VII, VIII, IX, X (10)
//XI, XII. XIII. XIV, XV, XVI, XVII, XVIII, XIX, XX (20)
//XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX (30)
//XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL (40)
//XLI, XLII, XLIII, XLIV, XLV, XLVI, XLVII, XLVIII, XLIX, L (50)
//LI, LII, LIII, LIV, LV, LVI, LVII, LVIII, LIX, LX (60)
//LXI, LXII, LXIII, LXIV, LXV, LXVI, LXVII, LXVIII, LXIX, LXX (70)
//LXXI, LXXII, LXXIII, LXXIV, LXXV, LXXVI, LXXVII, LXXVIII, LXXIX, LXXX (80)
//LXXXI, LXXXII, LXXXIII, LXXXIV, LXXXV, LXXXVI, LXXXVII, LXXXIII, LXXXIX, XC (90)
//XCI, XCII, XCIII, XCIV, XCV, XCVI, XCVII, XCVIII, XCIX, C (100)
// CC, CCC, CD, D(=500)
// DC, DCC, DCCC, CM, M (1000)

//Algorithmic thinking
//1581 - 1000=581-500=81-50=31-30=1
//1581>1000, so subtract and add M. 581, check the table, 581<1000, check the next, its greater than 500, so then add D, 81 <500, and less than 100, but 81>=50, add L. 31 is <50 so the conversion does not work, but it is greater than 10 by 3x, so add 3 XXX and I

// stringBuilder = "M" + "D" + "L" + "XXX" + "I"

//1993 -1000=993-900=93-90=3
//When the lower symbol is infprint of the bigger one, you actually need to subtract the smaller from the bigger
//answer should be MCMXCIII

//3999-3000=999-900=99-90=9. tHIS IS THE MAX NUMBER
// MMMCMXCIX

//create roman number look up table
//create string builder (or better still accumulator)
//accumulator starts as an empty string '', then adds the characters
//loop thru the lookup table, when we found a match we would take it out and add to accumulator, then contine subtracting
//that is, if currentNumber<=numInput, then subtract current number from numInput and add symbol to accumulator. so use the for in loop.

//for in statement loops through the properties of an object, each looping returns a key, the key is used to access the value, in this case object:value.
//      for (key in object) {
//        code to execute
// }
// for in can also be used to loop over the properties of an array


// const person = {
//   fname: "Georgie",
//   lname: "Ndirango",
//   age: 34
// }

// let text = "";
// for (let x in person) {
//     text =text + person[x] +" ";
// }

// console.log(text);

function convertToRoman(numInput) {
  const refTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  let accumulator = "";
  for (let key in refTable) {
    //  console.log(refTable[key]);      //shows the value in numbers
    let numberValue = refTable[key];      //assign the values to a variable
    // console.log(key, numberValue);         //show both the key and the value. key is the letter
    // we use while loop instead of if loop because the latter will run once
    while (numberValue <= numInput) {
      numInput = numInput - numberValue;
      accumulator = accumulator + key;
    }

  }

  return accumulator;
}

console.log(convertToRoman(199));       //output:   CXCIX-



