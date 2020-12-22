import initialState from '../redux/initial-state'
import T from '../redux/types'
import log from '../lib/log'
import {getRate} from '../lib/rates'
import lodash from 'lodash'

/** redux exchange reducer **/
export default (previousState = initialState, action) => {

    const state = lodash.cloneDeep(previousState)
    log('Action type:' + action.type);

    switch (action.type) {

        // Source or target input is selected
        case T.INPUT_SELECTED:
            log('isFirstInputActive:' + action.isFirstInputActive);
            if (action.isFirstInputActive === true) state.activeInput = 0;
            else state.activeInput = 1;

            log('active-input:' + state.activeInput);
            break;


        // Numpad key was pressed, input value needs update
        case T.NUMPAD_KEY_PRESSED:
            // fall down

        // Keyboard device key down
        case T.KEY_DOWN:

            updateInput(state, action);
            recalculateInput(state);
            break;

        // Currency are switched (source -> <- target)
        case T.SWITCH_CURRENCY:

            const tmpCurrency = state.currency[0];
            const tmpInput = state.input[0];

            state.currency[0] = state.currency[1]
            state.input[0] = state.input[1];

            state.currency[1] = tmpCurrency;
            state.input[1] = tmpInput;

            break;

        // Rates were not fetched (fetch failed, etc.)
        case T.RATES_NOT_FETCHED:
            state.ratesOnline = false;
            break;

        // Rates were updated (target input needs to be recalculated)
        case T.RATES_UPDATED:
            state.ratesOnline = true;
            state.usdRates = action.rates;

            recalculateInput(state)
            break;

        // Other source or target currency was selected
        case T.CURRENCY_SELECTED:
            state.currencySelection = false;
            state.currency[state.activeInput] = action.currency;

            recalculateInput(state)
            break;

        // Currency selection was requested (list needs to be shown / or hidden)
        case T.CURRENCY_SELECTION_REQUESTED:
            state.currencySelection = !state.currencySelection
            break;

        // Exchange requst
        case T.EXCHANGE_REQUEST:
            handleExchangeRequest(state)
            break;

        // Closing details
        case T.EXCHANGE_DETAILS_CLOSED:
            state.exchangeNotification = false
            state.message.text = "";
            break;

        // All balance is inserted as input
        case T.INSERT_BALANCE:
            state.activeInput = action.inputIndex;
            state.input[action.inputIndex] = state.balance[state.currency[action.inputIndex]]
            recalculateInput(state)
            break;

        default:
            break;
    }

    return state;

}
/** handles exchange request action **/
function handleExchangeRequest(state) {
    state.exchangeNotification = true

    // rates not update
    if (state.ratesOnline === false) {
        state.message.success = false;
        state.message.text = "Cannot perform, exchange rates are not up-to-date"
        return;
    }

    // parse error
    let source = parseFloat(state.input[0]);
    let target = parseFloat(state.input[1]);

    if (state.input[0] === "") source = 0;
    if (state.input[1] === "") target = 0;

    // NaN
    if ((isNaN(source) === true) || (isNaN(target) === true)) {
        state.message.success = false;
        state.message.text = "Input is not a valid number (unexpected error)"
        return;
    }

    // zero input
    if (source === 0) {
        state.message.success = false;
        state.message.text = "Input must be above zero"
        return;
    }

    // not enough balance
    if (state.balance[state.currency[0]] < state.input[0]) {
        state.message.success = false;
        state.message.text = "Not enough balance"
        return;
    }

    // update balance
    state.balance[state.currency[0]] -= source;
    state.balance[state.currency[1]] += target;

    state.message.success = true;
    state.message.text = "You exchanged " + source + " " + state.currency[0] + " for " +
        state.input[1] + " " + state.currency[1];


    // reset input values
    state.input[0] = "";
    state.input[1] = "";
}

/** updates input based on key acton **/
function updateInput(state, action) {
    log('Key:' + action.key);

    const original = state.input[state.activeInput].toString();

    // add digit or dot pressed
    let newString = "";
    if ((isDigit(action.key) === true) || (action.key === '.')) {
        newString = original + action.key;
    }
    // backspace pressed
    else {
        if (original.length > 0)
            newString = original.slice(0, -1);
    }

    const ret = getValidString(state.input[state.activeInput], newString);
    state.input[state.activeInput] = ret;
}


/** when input change, other input value needs to be recalculated **/
function recalculateInput(state) {


    const value = state.input[state.activeInput];
    const activeCurrency = state.currency[state.activeInput]

    const secondIndex = Math.abs(state.activeInput - 1);
    const secondCurrency = state.currency[secondIndex];

    const rate = getRate(activeCurrency, secondCurrency, state.usdRates);

    const result = value * rate;
    state.input[secondIndex] = parseFloat(result.toFixed(2));

}

/** takes original string and new string,
 * provides validation and return the original or new
 **/
function getValidString(originalString, newString) {
    let ret = originalString;

    // String validation
    const re = /^([1-9]\d{0,6}|0)(\.\d{0,2})?$|^$/
    const m = newString.match(re);

    if (m !== null) {
        ret = newString;
    }

    return ret;
}

/** checks if ch is digit and returns true or false **/
function isDigit(ch) {

    if ('0123456789'.indexOf(ch) !== -1) {
        return true;
    }
    return false;
}
