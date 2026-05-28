
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

const copyBtn = document.getElementById("copy-btn");
function copyPassword() {
    const password = resultText.textContent;

    if (password === "Тут будет пароль" || password === "") {
        alert("Сначала сгенерируй пароль!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "Скопировано! ✅";
            copyBtn.style.backgroundColor = "#ffe600";
            copyBtn.style.color = "#141414";

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = "transparent";
                copyBtn.style.color = "#ffe600";
            }, 1500);
        })
        .catch(err => {
            console.error("Не удалось скопировать: ", err);
        });
}

copyBtn.addEventListener("click", copyPassword);