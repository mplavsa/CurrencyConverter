function usdToAll() {
    
    setTimeout(usdToRsd,4);
    setTimeout(usdToEuro,4);
    setTimeout(usdToSwissFranc,4);
    setTimeout(usdToBritishPound,4);
    
//  setTimeout(refreshAll, 4000);

}

function usdToRsd() {

    var usdRsd = document.getElementById("usDolar").value * 99.87;
    document.getElementById("rsd").value = usdRsd.toFixed(2);
    
}


function usdToEuro() {

    var usdEuro = document.getElementById("usDolar").value * 0.84;
    document.getElementById("euro").value = usdEuro.toFixed(2);

}


function usdToSwissFranc() {

    var usdSwiss = document.getElementById("usDolar").value * 0.97;
    document.getElementById("swissFranc").value = usdSwiss.toFixed(2);

}

function usdToBritishPound() {

    var usdGbp = document.getElementById("usDolar").value * 0.74;
    document.getElementById("britPound").value = usdGbp.toFixed(2);
 
}


