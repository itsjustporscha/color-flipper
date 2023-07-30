const newColorBtnElement = document.getElementById("new-color-btn");

const currentColorElement = document.getElementById("current-color");

// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F Hexavalue

const hexvalues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue() {
  const randonIndexPosition = Math.floor(Math.random() * hexvalues.length);

  const randomHexValue = hexValues[randomIndexPosition];

  return randomHexValue;
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }

  return hexString;
}

newColorBtnElement.addEventListener("click", function () {
  const randomHexString = getRandomHexString(6);
  alert("randomHexString");
});
