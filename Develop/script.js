// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialchars ="!@#$%*";
var upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }


function generatePassword(){
var password = '';


  for(var i =0; i<= length; i++){ 
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;

 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
