let i;
for (i = 1; i <= 100; i++) {
    if (i % 3 && i % 5) { 
        window.document.write(i);
    } else {
        if (i % 3 === 0) {
            window.document.write("Marco!");
        }
        if (i % 5 === 0) {
            window.document.write("Polo!");
        }
    }
    window.document.write("<br>")
}
