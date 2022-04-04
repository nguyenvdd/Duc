const alpha = "abcdefghijklmnopqrstuvwxyz";// chữ thường
const calpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // chữ hoa
const numbers = "0123456789"; // số 
const symbols = "!@#$%^&*_-+="; // ký tự đặc biệt

const passwordTxt = document.getElementById("password"); 
const length = document.getElementById("length");
const inccalpha = document.getElementById("calpha");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");

generateBtn.addEventListener("click", () => {
    let characters = alpha;
    inccalpha.checked ? (characters += calpha) : "";
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    passwordTxt.value = generatePassword(length.value, characters);
  });

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
clearBtn.addEventListener("click", ()=> {
    passwordTxt.value="";
})