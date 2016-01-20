$(document).ready(function () {
    function callCounter(maximum) {
        for (var counter = 1; counter <= maximum; counter++) {
            if (counter % 15 == 0) {
                console.log("fizzbuzz");
                var btn = document.createElement("BUTTON");
                var t = document.createTextNode("FIZZBUZZ");
                btn.appendChild(t);
                document.body.appendChild(btn);
                document.write("<br>")
            } else if (counter % 5 == 0) {
                console.log("buzz");
                var btn = document.createElement("BUTTON");
                var t = document.createTextNode("BUZZ");
                btn.appendChild(t);
                document.body.appendChild(btn);
                document.write("<br>")
            } else if (counter % 3 == 0) {
                console.log("fizz");
                var btn = document.createElement("BUTTON");
                var t = document.createTextNode("FIZZ");
                btn.appendChild(t);
                document.body.appendChild(btn);
                document.write("<br>")
            } else {
                console.log(counter);
                document.write(counter);
                document.write("<br>")
            }
        }
    }
    var integer = parseInt(prompt("Please enter a number."), 10);
    callCounter(integer);
});
