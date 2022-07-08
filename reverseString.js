// let str = "Hello TradableBits!";

const reverseString = s => {
  let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }
  return reversedString;
};

console.log(reverseString("Hello TradableBits!"));
