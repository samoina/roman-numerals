function romanNumbers(number) {
  const system = {
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

let acc = ""
for (const key in system) {
  console.log(key);
  while (number>=system[key]) {
    number=number-system[key];
    acc= acc + key;
  }
}
  return acc;
}

console.log(romanNumbers(2999));     //output should be MMCMXCIX

