// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var usableChar = [];

var PasswordLength = 
    prompt("How many characters would you like your password to be?(8-24)")
   while (PasswordLength === <8 || >24) {
   }    
   else {
       PasswordLength === PasswordLength
    }

var lowercasePrompt = 
    prompt("Would you like to include lower cased letters in your password? (y/n)")
   if (lowercasePrompt==="y" || "Y") {
    usableChar.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    
   }
   else if (lowercasePrompt==="n" || "N") {
       usableChar.push();
       
   }
   else {
       alert ("Must be a valid response (y/n)");
       
   };
   
   var uppercasePrompt = 
   prompt("Would you like to include upper cased letters in your password? (y/n)")
  if (uppercasePrompt==="y" || "Y") {
   usableChar.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
   
  }
  else if (uppercasePrompt==="n" || "N") {
      usableChar.push();
      
  }
  else {
      alert ("Must be a valid response (y/n)");
      
  }

  var numericPrompt = 
  prompt("Would you like to include numbers in your password? (y/n)")
 if (numericPrompt==="y" || "Y") {
  usableChar.push("1","2","3","4","5","6","7","8","9");
  
 }
 else if (numericPrompt==="n" || "N") {
     usableChar.push();
     
 }
 else {
     alert ("Must be a valid response (y/n)");
     
 }

 var specCharPrompt = 
 prompt("Would you like to include numbers in your password? (y/n)")
if (numericPrompt==="y" || "Y") {
 specCharChar.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '?', '/','~');
 
}
else if (specCharPrompt==="n" || "N") {
    usableChar.push();
    
}
else {
    alert ("Must be a valid response (y/n)");
    
}
// add "for" prompt to ask how many characters should be used
// create loop to return a random string from usableChar array (loop the amount of times given in prompt)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = prompt("What is the new password");
  return password;
}
