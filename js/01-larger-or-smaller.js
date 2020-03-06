let firstNum = prompt("Enter a number.");
let secNum = prompt("Enter another number.");

if (firstNum > secNum) { 
    window.document.write(firstNum); 

} else if (secNum > firstNum) { 
    window.document.write(secNum);

} else if (firstNum === secNum) {
    window.document.write("The numbers are equal.");
}
