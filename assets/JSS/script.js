// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// set variables that could be put into password generator
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

// wrote the code for password generator

function generatePassword(){
  // set variables with the generate password scope
var password = '';
var chars='';
var length= prompt('Please enter a character length from 1-128!');

// wrote if statement to prompt the user to set the numbers of characters for the function
if(length>8&&length<128){
  // set variables or questions the user had to answer to be used within the function 
var casingUp =confirm('Would you like upper case letters?');
var numbersConfirm = confirm('Would you like it to contain numbers?');
var casingDown = confirm('Would you like it to contain lower case letters?');
var specialLetters = confirm('Would you like it to special letters?');
// wrote if statements to run alongside each question being asked
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
// the final function to be ran once all the selected character sets were applied

for(var i =0; i<= length; i++){ 
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
 }
//  created an alert that would show if the user selected the wrong number of characters or hit cancel when given the original prompt
 else alert('Please try again!');

 return password;


 
}


  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
