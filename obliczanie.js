function obliczanie() {
    let x = document.getElementById("num").value;
    let suma = (x * 2) - (0.1 * 2 * x);
    let suma2 = (x * 1) - (0.2 * 1 * x);
    let isChecked = document.getElementById("check").checked;
    
    switch (true) {
        case x >= 1 && x <= 50 && isChecked == false:
            document.getElementById("wynik").innerHTML = "Koszt ogłoszeń: " + x * 2 + " PLN";
            break;
        case x >= 1 && x <= 50 && isChecked == true:
            document.getElementById("wynik").innerHTML = "Koszt ogłoszeń: " + suma + " PLN";
            break;
        case x >= 51 && isChecked == false:
            document.getElementById("wynik").innerHTML = "Koszt ogłoszeń: " + x + " PLN";
            break;
        case x >= 51 && isChecked == true:
            document.getElementById("wynik").innerHTML = "Koszt ogłoszeń: " + suma2 + " PLN";
            break;
        default:
            document.getElementById("wynik").innerHTML = "Wprowadź dane";
            break;
    }
}