import "./style.css";

const input = document.querySelector<HTMLInputElement>("#password");

const passwordForm = document.querySelector<HTMLFormElement>("#passwordForm")!;

passwordForm!.addEventListener("submit", async (e) => {
  e.preventDefault();

  const countCharacters = passwordForm[
    "countCharacters"
  ] as unknown as HTMLInputElement;
  const numbers = passwordForm["numbers"] as unknown as HTMLInputElement;
  const lowercase = passwordForm["lowercase"] as unknown as HTMLInputElement;
  const uppercase = passwordForm["uppercase"] as unknown as HTMLInputElement;
  const symbols = passwordForm["uppercase"] as unknown as HTMLInputElement;

  const passwordLength = parseInt(countCharacters.value, 10);

  console.log(passwordLength);
  console.log(numbers.checked);
  console.log(lowercase.checked);
  console.log(uppercase.checked);
  console.log(symbols.checked);

  if (isNaN(passwordLength)) {
    countCharacters.value = "";
    countCharacters.placeholder = "Debe ser un numero";
    countCharacters.classList.add("border-red-500");
    return;
  }

  const password = generatePassword(passwordLength);
  //TODO: Generate the password
  console.log(password);
  input!.value = password;
});

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["'", ":", "!", "@", "#", "$", "^", ")", "&", "*", "%", "-"];

const arrayOfArrays = [letters, numbers, symbols];

function generatePassword(passwordLength: number) {
  let strongPassword: any[] = [];
  for (let i = 0; i < passwordLength; i++) {
    const myArr = arrayOfArrays[getRandomNumber(0, arrayOfArrays.length - 1)];
    const randomCharacter = myArr[getRandomNumber(0, myArr.length - 1)];

    strongPassword.push(randomCharacter);
  }

  const password = strongPassword.join("");
  console.log(password);
  return password;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
