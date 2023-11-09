window.onload = function () {
    const calculate = document.getElementById("convert-decimal");
    calculate.onclick = DecimalToBinary;
};
let decimalTextBox = document.querySelector("#decimal");
function DecimalToBinary() {
    const decimal = parseInt(decimalTextBox.value);
    const binary = decimal.toString(2);
    alert(`The binary representation of ${decimal} is ${binary}.`);
}
let isValidData = true;
let decimal = parseInt(decimalTextBox.value);
if (isNaN(decimal) || decimal < 0) {
    isValidData = false;
    decimalTextBox.nextElementSibling.textContent = "Please enter a valid number";
}
