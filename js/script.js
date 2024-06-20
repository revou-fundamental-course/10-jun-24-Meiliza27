
/*celcius to Fahrenheit */
function celtofah(){
    document.getElementById("Cel").disabled=false;
    document.getElementById("Fah").disabled=true;
    let celcius = document.getElementById("Cel").value;
    document.getElementById("Fah").value="";
    let hslkonv = Math.round(parseInt (celcius) * (9/5) + 32);
    try {
        document.getElementById("hsl").value = hslkonv ; " &deg;F";
        alert("konversi berhasil");
    } catch (error) {
        console.log("Error input");
    }
    
}

/*Fahrenheit to celcius*/
function fahtocel(){
    document.getElementById("Cel").disabled=true;
    document.getElementById("Fah").disabled=false;
    document.getElementById("Cel").value = "";
    let fahrenheit = document.getElementById("Fah").value;
    let hslkonv = Math.round((parseInt (fahrenheit) - 32) * (5/9));
    document.getElementById("hsl").value = hslkonv ; " &deg;C";
    alert("konversi berhasil");
}
/*Hanya aangka untuk input box*/
function hanyaangka() {
    document.getElementById('inputId').addEventListener('keypress', function (e) {
        if (!/[0-9]/.test(String.fromCharCode(e.which))) {
            e.preventDefault();
        }
    });
}

function reverse() {
    const konversiButton = document.getElementById("konversi");
    const currentFunction = konversiButton.getAttribute("onclick");

    if (currentFunction === "celtofah()") {
        konversiButton.setAttribute("onclick", "fahtocel()");
        document.getElementById("Cel").disabled=true;
        document.getElementById("Fah").disabled=false;
        document.getElementById("Fah").value = document.getElementById("hsl").value ;
        document.getElementById("Cel").value = "";
        document.getElementById("hsl").value = "";
        alert("Reverse berhasil")
    } else {
        konversiButton.setAttribute("onclick", "celtofah()");
        document.getElementById("Cel").disabled=false;
        document.getElementById("Fah").disabled=true;
        document.getElementById("Cel").value = document.getElementById("hsl").value;
        document.getElementById("Fah").value = "";
        document.getElementById("hsl").value = "";
        alert("Reverse berhasil")
    }
}

function reset(){
    document.getElementById("Cel").value = "";
    document.getElementById("Fah").value = "";
    document.getElementById("hsl").value = "";
    document.getElementById("konversi").setAttribute("onclick", "celtofah()");
    document.getElementById("Cel").disabled=false;
    document.getElementById("Fah").disabled=true;
    alert("Data telah direset.")
}