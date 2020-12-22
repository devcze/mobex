/** Calculates rates based on given usdRates **/
function getRate(sourceCurrency, targetCurrency, usdRates) {

    let ret = -1;

    if (sourceCurrency === "USD") {
        ret = usdRates[targetCurrency]
    } else if (targetCurrency === "USD") {
        ret = (1 / usdRates[sourceCurrency])
    } else {
        ret = (usdRates[targetCurrency] / usdRates[sourceCurrency])
    }

    return ret.toFixed(4);
}

export {getRate}