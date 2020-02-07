// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.
// https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/JavaScript_Introduction.html

let num1, num2;
    num1 = window.prompt("Input the first integer", 0);
    num2 = window.prompt("Input the second integer", 0);
    
    function integer(num1,num2) {

        var isInteger = Number.isInteger(num1) && Number.isInteger(num2);
    
        if(isInteger && num1 <= num2)
            document.write("This larger number is ");
    
        else if(isInteger && num1 >= num2)
            document.write("The larger number is " + Math.max(num1,num2));
   
        else if(isInteger && num1 >= num2)
            document.write("The numbers are equal " + Math.max(num1,num2));
    }
    
    integer(-1,-1);