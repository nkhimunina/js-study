function convertToRoman(num) {
  const table = [
    {roman: "M",	arabic: 1000},
    {roman: "CM",	arabic: 900},
    {roman: "D",	arabic: 500},
    {roman: "CD",	arabic: 400},
    {roman: "C",	arabic: 100},
    {roman: "XC",	arabic: 90},
    {roman: "L",	arabic: 50},
    {roman: "XL",	arabic: 40},
    {roman: "X",	arabic: 10},
    {roman: "IX",	arabic: 9},
    {roman: "V",	arabic: 5},
    {roman: "IV",	arabic: 4},
    {roman: "I",	arabic: 1},
  ]
  // 1 4 5 9
  // 10 40 50 90
  // 100 400 500 900

  const digits = [];

  let len = num.toString(10).length;
  //console.log(len);  
  for (let i = 0; i < len; i++) {
    digits.push(num % 10);
    num = Math.floor(num/10);
  }
  //console.log(digits);

  const roman = [];
  let multiplier = 1;
  for (let i = 0; i < digits.length; i++) {
    multiplier = i === 0 ? 1 : multiplier*10;
    //console.log("multiplier = " + multiplier);
    let index = table.findIndex((element) => element.arabic === digits[i]*multiplier);
    if (index !== -1) {
      roman.unshift(table[index].roman);
    } else {
      if (digits[i] < 4) {
        for (let j = 0; j < digits[i]; j++) {
          let index = table.findIndex((element) => element.arabic === multiplier);
          roman.unshift(table[index].roman);
        }
        continue;
      }
      if (digits[i] > 5 && digits[i] < 9) {
        for (let j = 0; j < digits[i]-5; j++) {
          let index = table.findIndex((element) => element.arabic === multiplier);
          roman.unshift(table[index].roman);
        }
        let index = table.findIndex((element) => element.arabic === 5*multiplier);
        roman.unshift(table[index].roman);
        continue;
      }
    }
  }

  //console.log(roman.join(""));
  return roman.join("");
}

convertToRoman(2); // II
convertToRoman(3); //III
convertToRoman(4); //IV
convertToRoman(5); //V
convertToRoman(9); //IX
convertToRoman(12); //XII
convertToRoman(16); //XVI
convertToRoman(29); //XXIX
convertToRoman(44); //XLIV
convertToRoman(45); //XLV
convertToRoman(68); //LXVIII
convertToRoman(83); //LXXXIII
convertToRoman(97); //XCVII
convertToRoman(99); //XCIX
convertToRoman(400); //CD
convertToRoman(500); //D
convertToRoman(501); //DI
convertToRoman(649); //DCXLIX
convertToRoman(798); //DCCXCVIII
convertToRoman(891); //DCCCXCI
convertToRoman(1000); //M
convertToRoman(1004); //MIV
convertToRoman(1006); //MVI
convertToRoman(1023); //MXXIII
convertToRoman(2014); //MMXIV
convertToRoman(3999); //MMMCMXCIX