/** redux action types **/
export default {

    // user is changing source currency
    CHANGE_SOURCE_CURRENCY: "CHANGE_SOURCE_CURRENCY",

    // user is changing target currency
    CHANGE_TARGET_CURRENCY: "CHANGE_TARGET_CURRENCY",

    // numpad key pressed to change input value
    NUMPAD_KEY_PRESSED: "NUMPAD_KEY_PRESSED",

    // KEY_DOWN
    KEY_DOWN: "KEY_DOWN",

    // input selection between source and target
    INPUT_SELECTED: "INPUT_SELECTED",

    // cursor position was changed
    CURSOR_POSITION_CHANGED: "CURSOR_POSITION_CHANGED",

    // switch sides (source and target and currency are switched)
    SWITCH_CURRENCY: "SWITCH_CURRENCY",

    // rates error
    RATES_NOT_FETCHED: "RATES_NOT_FETCHED",

    // rates updated
    RATES_UPDATED: "RATES_UPDATED",

    // clicked on currency selection
    CURRENCY_SELECTION_REQUESTED: "CURRENCY_SELECTION_REQUESTED",

    // currency selected
    CURRENCY_SELECTED: "CURRENCY_SELECTED",

    // user clicked exchange to perform exchange
    EXCHANGE_REQUEST: "EXCHANGE_REQUEST",

    // exchange details closed and numpad available again
    EXCHANGE_DETAILS_CLOSED: "EXCHANGE_DETAILS_CLOSED",

    // insert balance as particular input for exchange
    INSERT_BALANCE: "INSERT_BALANCE"
}

