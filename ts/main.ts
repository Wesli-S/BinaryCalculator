/*Create a function that takes a decimal number as a 
parameter and returns the binary equivalent as a string */

/*window.onload = function(){
    //set up button click
    const calculate = document.getElementById("convert-decimal") as HTMLButtonElement;
    calculate.onclick = DecimalToBinary;
}

let decimalTextBox = document.querySelector("#decimal") as HTMLInputElement;

function DecimalToBinary() {
    const decimal = parseInt(decimalTextBox.value);

    //convert decimal to binary
    const binary = decimal.toString(2);
    alert(`The binary representation of ${decimal} is ${binary}.`);
}


//validate input
let isValidData:boolean = true;

let decimal = parseInt(decimalTextBox.value);
if(isNaN(decimal) || decimal < 0) {
    isValidData = false;
    decimalTextBox.nextElementSibling.textContent = "Please enter a valid number";
}*/

 //Another version (DOES NOT USE HTML ELEMENTS)
function DecimalToBinary(decimal: number): string {
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary
}