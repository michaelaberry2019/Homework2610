
var passwordLength = prompt("can only be between 8 - 128 charachters");
var lowercase = confirm("do you want lowercase charachters");
var uppercase = confirm("do you want upercase charachters");
var specChar = confirm("do you want special charachters");
var pwContainsNumeric = confirm("do you want numbers")

var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');

var randomFunc = {
  lower: getRandomUpper,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', function(event) {
   event.preventDefault();
  var length = lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

resultEl.innerText = generatePassword(
  hasLower, 
  hasUpper, 
  hasNumber, 
  hasSymbol, 
  length
  );
});
function generatePassword(lower, upper, number,symbol, length) {
  // init pw var
  // folter out unchecked types
  // loop over length call generator function for each type
  // add final password to the password var and return
  let generatePassword = '';
  var typesCount = lower + upper + number + symbol;
  console.log('typesCount: ', typesCount);
  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
      item => Object.values(item) [0]
  );

  console.log('typesArr: ', typesArr);
  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type) [0];
      
      console.log('funcName: ', funcName);

      generatePassword += randomFunc [funcName]();
    });
  } 
  console.log(generatePassword.slice(0, length));
}
function getRandomLower () {
return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
  function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol () {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols, length)];
}
clipboardEl.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
  var password = resultEl.innerText;

  if(!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
});
