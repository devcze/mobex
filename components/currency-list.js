import styled from 'styled-components';
import {connect} from "react-redux";
import A from "../redux/actions"

const CurrencyListStyle = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background-color: white;
  color: #555555;          
`
const Item = styled.div`
    padding: 3vw;
    padding-left: 5vw;
    font-size: 2em;   
    border-bottom: 1px solid lightgray;
`

/** List of available currencies minus those already selected **/
const CurrencyList = (props) =>
    <CurrencyListStyle>
        {
            props.availableCurrency.map((currency, index) => {

                if (props.currency.includes(currency) === false)
                    return (<Item
                        key={index}
                        onClick={() => props.currencySelected(currency)}
                    >
                        {currency}
                    </Item>)
            })}
    </CurrencyListStyle>


const mapStateToProps = state => {
    return {availableCurrency: state.availableCurrency, currency: state.currency}
}

const mapDispatchToProps = {
    currencySelected: A.currencySelected
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)