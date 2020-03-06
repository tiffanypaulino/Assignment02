let i;
for (i = 0; i <= 15; i++) {
    if (i === 0) {
        window.document.write(i + " is even" + "<br>");
    }
    else if (i % 2 === 0) {
        window.document.write(i + " is even" + "<br>");
    } else {
        window.document.write(i + " is odd" + "<br>");
    }
}
