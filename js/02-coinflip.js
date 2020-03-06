let coinFlip = Math.round(Math.random());
let choice = prompt("Heads or tails?");

if (coinFlip < 1) {
    var flipResult = "heads";
} else {
    var flipResult = "tails";
}

if (flipResult === choice) {
    if (flipResult === "heads") {
    alert("The flip was heads and you chose heads...You win!");
    } else {
    alert("The flip was heads but you chose tails...You lose.");
    }
} else {
    if (flipResult == "tails") {
    alert("The flip was tails but you chose heads...You lose.");
    } else {
    alert("The flip was tails and you chose tails...You win!");
    }
}
