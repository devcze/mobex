// UI Components
import Input from '../components/input';
import Balance from '../components/balance'
import Topbar from '../components/topbar'
import CurrencySwap from '../components/currency-swap'
import ExchangeRate from '../components/exchange-rate'
import NumpadContent from '../components/numpad-content'

// Redux
import {connect} from 'react-redux'
import A from '../redux/actions';

// Styled
import styled from 'styled-components';

const ExchangeStyle = styled.div`
  height: 100%;
  min-width: 100%;
  background-color: green;
  color: white;  
  font-family: Arial; 
  font-size: 2.5vh;  
  
  // disable selection
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -o-user-select: none;
  -moz-user-select: none;    
`

/** Adjust sections height to 100% total height **/

const SourceSection = styled.div`
    min-width: 100%;
    height: 30%;
    background-image: linear-gradient(#0955dcff, #2a78ffff);
    vertical-align: middle;                
`


const TargetSection = styled.div`
    min-width: 100;
    height: 30%;
    background-image: linear-gradient(#225ccaff, #2253caff);
    
    .left {
        width: 0
    }        
`

const SwapSection = styled.div`
    margin-top: 4vh;
    text-align: center;
`

const Padding = styled.div`
  padding: 5vw;
  padding-top: 5vh;
`

const Source = styled.div`    
  display: flex;
  flex-direction: column;
`

const NumpadSection = styled.div`
    height: 40%;
`

const Row = styled.div`
    display: flex;
    
    .left {
        flex: 0 0 60%;
    }
   
    .right {
        flex: 1;       
    }
`


/** Main Exchange React component, can be place where needed **/
/** Major parts
 SourceSection
 TopBar
 Input
 Balance
 TargetSection
 Input
 Balance
 NumpadSection
 **/

const Exchange = (props) => {
    return (<ExchangeStyle>

        <SourceSection onClick={props.inputSelected.bind(this, true)}>

            <Topbar/>

            <Padding>
                <Input
                    id={0}
                    activeInput={props.activeInput}
                    currency={props.currency[0]}
                    userInput={props.input[0]}
                    prefix="-"

                />
                <Balance
                    id={0}
                    currency={props.currency[0]}
                    balance={props.balance[props.currency[0]]}/>

            </Padding>

            <SwapSection>
                <CurrencySwap currencySwitched={props.switchCurrency}/>
            </SwapSection>

        </SourceSection>

        <TargetSection onClick={props.inputSelected.bind(this, false)}>
            <Padding>
                <Input
                    id={1}
                    activeInput={props.activeInput}
                    currency={props.currency[1]}
                    userInput={props.input[1]}
                    prefix="+"
                />

                <Row>
                    <div className="left">
                        <Balance
                            id={1}
                            currency={props.currency[1]}
                            balance={props.balance[props.currency[1]]}
                        />
                    </div>

                    <div className="right">
                        <ExchangeRate
                            sourceCurrency={props.currency[1]}
                            targetCurrency={props.currency[0]}
                            usdRates={props.usdRates}
                            ratesOnline={props.ratesOnline}
                        />
                    </div>
                </Row>

            </Padding>
        </TargetSection>

        <NumpadSection>
            <NumpadContent/>
        </NumpadSection>

    </ExchangeStyle>)
}

const mapStateToProps = state => {
    const {currency, balance, input, currencySelection, activeInput} = state;
    return {currency, balance, input, currencySelection, usdRates: state.usdRates, activeInput, ratesOnline: state.ratesOnline}
}

const mapDispatchToProps = {
    numpadKeyPressed: A.nupadKeyPressed,
    inputSelected: A.inputSelected,
    switchCurrency: A.switchCurrency,
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)