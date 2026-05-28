
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const resultText = document.getElementById("result-text");
const lengthInput = document.getElementById("length-input");
const generateBtn = document.getElementById("generate-btn");

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function generatePassword() {
    const passwordLength = Number(lengthInput.value);
    
    const availableChars = UPPERCASE_CHARS + LOWERCASE_CHARS + NUMBER_CHARS + SYMBOL_CHARS;
    
    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = getRandomIndex(availableChars.length);
        generatedPassword += availableChars[randomIndex];
    }

    resultText.textContent = generatedPassword;
}

generateBtn.addEventListener("click", generatePassword);