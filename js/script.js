

function celtofah(){
    let celcius = document.getElementById("Cel").value;
    let fahrenheit = document.getElementById("Fah").value;
    let hslkonv = parseInt (celcius) * 9/5 + 32;
    document.getElementById("hsl").value = hslkonv;

}


function fahtocel(){
    let celcius = document.getElementById("Cel").value;
    let fahrenheit = document.getElementById("Fah").value;
    let hslkonv = (parseInt (fahrenheit) + 32) / 1.8;
    document.getElementById("hsl").value = hslkonv;

}

function reverse() {
    const konversiButton = document.getElementById("konversi");
    const currentFunction = konversiButton.getAttribute("onclick");

    if (currentFunction === "celtofah()") {
        konversiButton.setAttribute("onclick", "fahtocel()");
    } else {
        konversiButton.setAttribute("onclick", "celtofah()");
    }
}

function reset(){
    document.getElementById("Cel").value = "";
    document.getElementById("Fah").value = "";
    document.getElementById("hsl").value = "";
    document.getElementById("konversi").setAttribute("onclick", "celtofah()");
}