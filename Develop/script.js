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
var chars='';
var length= prompt('Please enter a character length from 1-128!');

if(length>8&&length<128){
var casingUp =confirm('Would you like upper case letters?');
var numbersConfirm = confirm('Would you like it to contain numbers?');
var casingDown = confirm('Would you like it to contain lower case letters?');
var specialLetters = confirm('Would you like it to special letters?');

if(casingUp){
  chars+=upperChars;
}
if(numbersConfirm){
  chars+=numbers;
}
if(casingDown){
  chars+=lowerChars;
}
if(specialLetters){
  chars+=specialchars;
}

for(var i =0; i<= length; i++){ 
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;

 }
}


  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
