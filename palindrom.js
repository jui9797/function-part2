function isPalindrome(num) {
    // Convert number to a string
    const strNum = num.toString();
    
    // Reverse the string
    const reversedStr = strNum.split('').reverse().join('');
    
    // Check if the original string is the same as the reversed one
    return strNum === reversedStr;
}

// Example usage:
console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false
console.log(isPalindrome(1331)); // true
