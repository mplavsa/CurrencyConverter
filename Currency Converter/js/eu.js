function eurToAll() {

    setTimeout(eurToRsd,4);
    setTimeout(eurToUsDolar,4);
    setTimeout(eurToSwissFranc,4);
    setTimeout(eurToBritishPound,4);

    //    setTimeout(refreshAll, 4000);

}

function eurToRsd() {

    var eurRsd = document.getElementById("euro").value * 119.21;
    document.getElementById("rsd").value = eurRsd.toFixed(2);
}


function eurToUsDolar() {

    var eurUsDolar = document.getElementById("euro").value * 1.19;
    document.getElementById("usDolar").value = eurUsDolar.toFixed(2);
}


function eurToSwissFranc() {

    var euChf = document.getElementById("euro").value * 1.16;
    document.getElementById("swissFranc").value = euChf.toFixed(2);
}

function eurToBritishPound() {

    var eurGbp = document.getElementById("euro").value * 0.88;
    document.getElementById("britPound").value = eurGbp.toFixed(2);
}


