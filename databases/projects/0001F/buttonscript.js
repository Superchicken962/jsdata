// Getting the tls elements from the HTML file and setting them as JS variables
var tls1 = document.getElementById("tls-1");
var tls2 = document.getElementById("tls-2");
var tls3 = document.getElementById("tls-3");
var tls4 = document.getElementById("tls-4");
var tls5 = document.getElementById("tls-5");
var tls6 = document.getElementById("tls-6");
var tls7 = document.getElementById("tls-7");
var tls8 = document.getElementById("tls-8");
var tls9 = document.getElementById("tls-9");
var tls10 = document.getElementById("tls-10");
var tls11 = document.getElementById("tls-11");
// Hiding all of the variables so they can be unhidden later
tls1.style.display = "none";
tls2.style.display = "none";
tls3.style.display = "none";
tls4.style.display = "none";
tls5.style.display = "none";
tls6.style.display = "none";
tls7.style.display = "none";
tls8.style.display = "none";
tls9.style.display = "none";
tls10.style.display = "none";
tls11.style.display = "none";
// Creating the line that will be getting replaced each time the button is pressed.
var newtextline = " "; // leave blank
newtextline.style.display = "none";
//
function newline() { // this version will replace the text each time the button is pressed
    newtextline.style.display = "block";
    if (newtextline == " ") { // leave blank 
        newtextline = "Placeholder 1";
    } else if (newtextline == "Placeholder 1") {// enter same placeholder as above
        newtextline = "Placeholder 2";
    } else if (newtextline == "Placeholder 2") {
        newtextline = "Placeholder 3";
    } else if (newtextline == "Placeholder 3") {
        newtextline = "Placeholder 4";
    } else if (newtextline == "Placeholder 4") {
        newtextline = "Placeholder 5";
    } else if (newtextline == "Placeholder 5") {
        newtextline = "Placeholder 1"; // Cycles back to the first line. Replace this with a 6 if you want more lines
    }
    document.getElementById("text").innerHTML = newtextline; // this line basically sets the html id to the javascript variable
}

function newlinestack() { // this version will print out (unhide) another line of text when the button is pressed
    if (tls1.style.display == "none") {
        tls1.style.display = "block";
    } else if (tls2.style.display == "none") {
        tls2.style.display = "block";
    } else if (tls3.style.display == "none") {
        tls3.style.display = "block";
    } else if (tls4.style.display == "none") {
        tls4.style.display = "block";
    } else if (tls5.style.display == "none") {
        tls5.style.display = "block";
    } else if (tls6.style.display == "none") {
        tls6.style.display = "block";
    } else if (tls7.style.display == "none") {
        tls7.style.display = "block";
    } else if (tls8.style.display == "none") {
        tls8.style.display = "block";
    } else if (tls9.style.display == "none") {
        tls9.style.display = "block";
    } else if (tls10.style.display == "none") {
        tls10.style.display = "block";
    } else if (tls11.style.display == "none") {
        tls11.style.display = "block";
    } else if (tls11.style.display == "block") {
        var tlscopy = document.getElementById("tls-11");
        var dupetls = tlscopy.cloneNode(true);
        document.body.appendChild(dupetls);
    }
}