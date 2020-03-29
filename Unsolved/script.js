// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  
    // var PasswordLengthPrompt = 
    // prompt("How many characters would you like your password to be?(8-24)");

    var lowercasePrompt = 
    confirm("Would you like to include lower cased letters in your password?");

    var uppercasePrompt = 
    confirm("Would you like to include upper cased letters in your password?");

    var numericPrompt = 
    confirm("Would you like to include numbers in your password?");

    var specCharPrompt = 
    confirm("Would you like to include special characters in your password?");

    var usableChar = [];


//    while (PasswordLength === <8 || >24) {
//    }    
//    else {
//        PasswordLength === PasswordLength
//     }

   if (lowercasePrompt) {
    usableChar.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    ;
   }

    if (uppercasePrompt) {
   usableChar.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"); 
   ;
  }

    if (numericPrompt) {
  usableChar.push("1","2","3","4","5","6","7","8","9","0");
  ;
 }

 
    if (specCharPrompt) {
    usableChar.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '?', '/','~');
; 
}

// add "for" prompt to ask how many characters should be used
// create loop to return a random string from usableChar array (loop the amount of times given in prompt)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = prompt("What is the new password");
  return password;
}
