function palindrome(str) {
  let strCheck = str.toLowerCase().replace(/\W|\s+|_/g, "");
  
  for (let i = 0, j = strCheck.length-1; i < strCheck.length/2; i++, j--) {
    if (strCheck[i] !== strCheck[j]) {
      return false;
    }
  }

  return true;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");.
palindrome("five|\_/|four");