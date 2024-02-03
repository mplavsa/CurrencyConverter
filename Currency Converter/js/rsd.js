function rsdToAll() {
    setTimeout(rsdToEuro, 4);
    setTimeout(rsdToUsDolar, 4);
    setTimeout(rsdToSwissFranc, 4);
    setTimeout(rsdToBritishPound, 4);
  //setTimeout(refreshAll, 4000);
}
function rsdToEuro() {
    var euro = document.getElementById("rsd").value * 0.01;
    document.getElementById("euro").value = euro.toFixed(2);
}
function rsdToUsDolar() {
    var usDolar = document.getElementById("rsd").value * 0.01;
    document.getElementById("usDolar").value = usDolar.toFixed(2);
}
function rsdToSwissFranc() {
    var swiss = document.getElementById("rsd").value * 0.0097;
    document.getElementById("swissFranc").value = swiss.toFixed(2);
}
function rsdToBritishPound() {
    var british = document.getElementById("rsd").value * 0.0074;
    document.getElementById("britPound").value = british.toFixed(2);
}
