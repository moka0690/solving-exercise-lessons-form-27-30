let userName = "Elzero";

console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.charAt(0).repeat(3).toLowerCase()); // eee
console.log(userName.substr(0,1).toLowerCase()); // e



let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith( letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True"