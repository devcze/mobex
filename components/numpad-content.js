// UI Components
import CurrencyList from '../components/currency-list'
import Info from '../components/info'
import Numpad from '../components/numpad'

// Redux
import {connect} from 'react-redux'
import A from '../redux/actions';

/** NumpadContent draws numpad or other components in NumpadArea **/
const NumpadContent = (props) => {
    if (props.currencySelection === true) return (<CurrencyList/>)
    else if (props.exchangeNotification === true) return (<Info />)
    else return (<Numpad onPress={props.numpadKeyPressed}/>)
}

const mapStateToProps = state => {
    const {currencySelection, exchangeNotification} = state;
    return {currencySelection, exchangeNotification}
}

const mapDispatchToProps = {
    numpadKeyPressed: A.nupadKeyPressed
}

export default connect(mapStateToProps, mapDispatchToProps)(NumpadContent)