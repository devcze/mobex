import {getRate} from '../lib/rates'
import styled from 'styled-components';


const ButtonStyle = styled.div`  
  border: 1px solid white;
  border-radius: 5px;
  background-color: #0b51cbff;
  text-align: center;
  padding: 0.1em;
`

/** Exchange Rate Button **/
export default (props) => {

    if (props.ratesOnline === false )  return (<ButtonStyle>loading...</ButtonStyle>)

    return (
        <ButtonStyle>
            {getSymbol(props.sourceCurrency) + "1 = " + getSymbol(props.targetCurrency) +
            getRate(props.sourceCurrency, props.targetCurrency, props.usdRates)}
        </ButtonStyle>
    )
}

/** return currency symbol char for currency code **/
function getSymbol(currency) {

    switch (currency) {
        case "GBP":
            return "£"
        case "EUR":
            return "€"
        case "USD":
            return "$"
        case "AUD":
            return "A$"
        default:
            return currency;
    }

}

