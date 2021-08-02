//Replace With Alphabet Position
/***
Description:
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
***/

//clever solution
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

// my solution
function alphabetPositionReduceVersion(text) {
  const reducer = (accumulator, currentValue) => {
    let ignoreCap = currentValue.toLowerCase();
    if(ignoreCap.match(/[a-z]/i)){
      let val = ignoreCap.charCodeAt() - 96;
      return accumulator + val + " ";
    } else {
      return accumulator;
    }
  };

  let result = text.split('').reduce(reducer, "");
  return result.trim();
}
