// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var PasswordLengthPrompt = 
prompt("How many characters would you like your password to be?(8-128)");
var lowercasePrompt = 
confirm("Would you like to include lower cased letters in your password?");
var uppercasePrompt = 
confirm("Would you like to include upper cased letters in your password?");
var numericPrompt = 
confirm("Would you like to include numbers in your password?");
var specCharPrompt = 
confirm("Would you like to include special characters in your password?");
var usableChar = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  if (PasswordLengthPrompt <8) {
    alert("Must be 8-128 characters")
    }
    else if (PasswordLengthPrompt >128) {
    alert("Must be 8-128 characters")
    }
    else{
    var passwordLengthPrompt = passwordLengthPrompt;
    }

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
      }
      
  
  for (i=0; i<=passwordLengthPrompt;i++){
    password = password + usableChar.charAt(Math.floor(Math.random() * usableChar.length));
}
    var password = prompt("What is the new password");
  
  return password;
  
}