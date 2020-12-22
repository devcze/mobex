import ExchangeRate from '../components/exchange-rate'
import A from '../redux/actions';
import {connect} from "react-redux";
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
    padding: 0.5em;  
`
const Cancel = styled.div`
  display: inline-block;
  text-align: left;
  width: 30%;
`
const RatesButton = styled.div`
  display: inline-block;
  width: 40%;
`
const ExchangeButton = styled.div`
  display: inline-block;
  width: 30%;
  text-align: right;
`

/** Top bar UI element **/
const Topbar = (props) =>
    <Bar>
        <Cancel>Cancel</Cancel>
        <RatesButton>
            <ExchangeRate
                sourceCurrency={props.sourceCurrency}
                targetCurrency={props.targetCurrency}
                usdRates={props.usdRates}
                ratesOnline={props.ratesOnline}
            />
        </RatesButton>
        <ExchangeButton onClick={props.exchangeRequested}>Exchange</ExchangeButton>
    </Bar>


const mapStateToProps = state => {
    const sourceCurrency = state.currency[0];
    const targetCurrency = state.currency[1]

    return { sourceCurrency, targetCurrency, usdRates: state.usdRates, ratesOnline: state.ratesOnline }
}

const mapDispatchToProps = {
    exchangeRequested : A.exchangeRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)