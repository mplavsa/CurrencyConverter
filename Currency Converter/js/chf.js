function chfToAll() {
    setTimeout(chfToRsd,4);
    setTimeout(chfToEuro,4);
    setTimeout(chfToUsDolar,4);
    setTimeout(chfToBritishPound,4);
  //setTimeout(refreshAll, 4000);
}
function chfToRsd() {
    var chfRsd = document.getElementById("swissFranc").value * 102.9;
    document.getElementById("rsd").value = chfRsd.toFixed(2);
}
function chfToEuro() {
    var chfEur = document.getElementById("swissFranc").value * 0.9;
    document.getElementById("euro").value = chfEur.toFixed(2);
}
function chfToUsDolar() {
    var chfUsDolar = document.getElementById("swissFranc").value * 1.3;
    document.getElementById("usDolar").value = chfUsDolar.toFixed(2);
}
function chfToBritishPound() {
    var chfBritish = document.getElementById("swissFranc").value * 0.8;
    document.getElementById("britPound").value = chfBritish.toFixed(2);
}
