function cleanUpNonAlpha(str) {
    return str.replace(/[\W_]/g, "");
  }
  
  function makeUppercase(str) {
    return str.toUpperCase()
  }
  
  function flipStr(str) {
    //take an empty string
    let result = "";
    //start a loop at the end of the input string
    //Put the letter at the current stage at the end of the result string
    for(let i=str.length-1; i>=0; i--){
      result += str[i];
    }
    //return result string
    return result
  }
  
  function palindrome(str) {
    //remove all non-alphanumeric characters
    const cleanedUpStr = cleanUpNonAlpha(str);
  
    //convert string to upper case
    const uppercaseStr = makeUppercase(cleanedUpStr);
  
    //reverse string
    const reversedStr = flipStr(uppercaseStr);
  
    //compare reversed and upper case string
    // if palindrome, return true
    console.log(`Is ${uppercaseStr} the same as ${reversedStr}?`)
    return reversedStr === uppercaseStr;
  }
  
  console.log(palindrome("Sit on a potato pan, Otis"));