/** initial state - state that is loaded when application starts **/
export default {

    // source and target currency
    currency: [
        "GBP",
        "USD"
    ],

    // user balance
    balance: {
        GBP: 58.33,
        USD: 10.22,
        EUR: 11.22,
        AUD: 1.388
    },

    // available currency
    availableCurrency: ["USD","EUR","GBP","AUD"],

    // usd rates
    usdRates: {
        EUR: 1,
        GBP: 1,
        AUD: 1
    },

    // rates data are valid online
    ratesOnline: false,

    // initial input values
    input: [
        "", ""
    ],

    // activeInput (source input = 0, target input = 1)
    activeInput: 0,

    // currency selection
    currencySelection: false,
    // exchange notification visible
    exchangeNotification: false,
    message: {success: true, text: ""}





}