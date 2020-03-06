let futureValue = 0, investment = 0, rate = 0, years = 0, i;

investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
while(isNaN(investment)) {
    alert("Enter a number idiot");
    investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
}
rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
while(isNaN(rate)) {
    alert("Enter a number");
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
}
while(rate > 6) {
    alert("Number no more than 6%");
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
}
years = parseInt(window.prompt("Enter number of years"));
while(isNaN(years))  {
    alert("Enter a number");
    years = parseInt(window.prompt("Enter number of years"));
}
while(years > 30) {
    alert("Enter a number of years, less than 30");
    years = parseInt(window.prompt("Enter number of years"));
}

futureValue = investment;
for (i = 1; i <= years; i++) 
{   
    futureValue = futureValue + (futureValue *  rate / 100);
}

window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + futureValue.toFixed(2));
