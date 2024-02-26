// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%*";
var length =(i>0; i<==128; )
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 function generatePassword(){
  for(var i =0; i< length; i++){

  }

 }
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
