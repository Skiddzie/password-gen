// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  const specialChar = "!@#$%^&*()_+~`,./<>?;:[]{}";
  specialCharList = specialChar.split('');
  const lowerChar = "qwertyuiopasdfghjklzxcvbnm";
  lowerCharList = lowerChar.split('');
  const upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
  upperCharList = upperChar.split('');
  const numChar = "1234567890";
  numCharList = numChar.split('');
  var allChar = []
  var userLength = prompt("how long do you want your password? enter a number between 8 and 128");
  if (userLength < 8){
    alert("please enter a number greater than 8");
    generatePassword();
  }
  else if (userLength > 128){
    alert("please enter a number less than 128");
    generatePassword();
  }
  else {
  var specialConfirm = confirm("do you want special characters");
  if (specialConfirm){
    allChar = allChar.concat(specialCharList);
  }
  var numberConfirm = confirm("do you want numbers?");
  if (numberConfirm) {
    allChar = allChar.concat(numCharList);
  }
  var capitalConfirm = confirm("you want capitals?");
  if (capitalConfirm) {
    allChar = allChar.concat(upperCharList);
  }
  var lowerConfirm = confirm("do you want lowercase numbers?");
  if (lowerConfirm) {
    allChar = allChar.concat(lowerCharList);
  }
  console.log(allChar);
  for (let i = 0; i < userLength; i++) {
    const ranChar = allChar[Math.floor(Math.random() * allChar.length)];
    console.log(ranChar);
    password = password.concat(ranChar);
    console.log(password);
  } 
  return password;
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

