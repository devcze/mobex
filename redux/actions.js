import T from '../redux/types'

/** redux action creators **/
export default {

    nupadKeyPressed(key) {
        return {
            type: T.NUMPAD_KEY_PRESSED,
            key
        }
    },

    keyDown(key) {
        return {
            type: T.KEY_DOWN,
            key
        }
    },

    inputSelected(isFirstInputActive) {
        return {
            type: T.INPUT_SELECTED,
            isFirstInputActive

        }
    },

    cursorPositionChanged(cursorPosition) {
        return {
            type: T.CURSOR_POSITION_CHANGED,
            cursorPosition
        }

    },

    switchCurrency() {
        return {
            type: T.SWITCH_CURRENCY
        }
    },

    ratesNotFetched() {
        return {
            type: T.RATES_NOT_FETCHED
        }
    },

    ratesUpdated(rates) {
        return {
            type: T.RATES_UPDATED,
            rates,
        }
    },

    currencySelectionRequested() {
        return {
            type: T.CURRENCY_SELECTION_REQUESTED
        }
    },

    currencySelected(currency) {
        return {
            type: T.CURRENCY_SELECTED,
            currency
        }
    },

    exchangeRequested() {
        return {
            type: T.EXCHANGE_REQUEST
        }
    },

    closeExchangeDetails() {
        return {
            type: T.EXCHANGE_DETAILS_CLOSED
        }
    },

    insertBalance(inputIndex) {
        return {
            type: T.INSERT_BALANCE,
            inputIndex
        }
    }


}