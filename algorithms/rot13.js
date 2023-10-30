function rot13(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (/\w/.test(str[i])) {
      let diff = str[i].charCodeAt(0) - 'A'.charCodeAt(0);
      if (diff < 13) {
        res.push(String.fromCharCode(
          'Z'.charCodeAt(0) - (12 - diff)));
      } else {
        res.push(String.fromCharCode(str[i].charCodeAt(0) - 13));
      }
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}

rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("SERR CVMMN!"); // FREE PIZZA!
rot13("SERR YBIR?"); // FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.