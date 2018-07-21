function gbpToAll() {

    setTimeout(gbpToRsd, 4);
    setTimeout(gbpToEur, 4);
    setTimeout(gbpToUsDolar, 4);
    setTimeout(gbpToSwissFranc, 4);

    //    setTimeout(refreshAll, 4000);

}

function gbpToRsd() {

    var gbpRsd = document.getElementById("britPound").value * 135.25;
    document.getElementById("rsd").value = gbpRsd.toFixed(2);
}

function gbpToEur() {

    var gbpEur = document.getElementById("britPound").value * 1.13;
    document.getElementById("euro").value = gbpEur.toFixed(2);
}

function gbpToUsDolar() {

    var gbpUsDolar = document.getElementById("britPound").value * 1.35;
    document.getElementById("usDolar").value = gbpUsDolar.toFixed(2);
}


function gbpToSwissFranc() {

    var gbpChf = document.getElementById("britPound").value * 1.31;
    document.getElementById("swissFranc").value = gbpChf.toFixed(2);
}