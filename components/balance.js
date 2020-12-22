import A from "../redux/actions";
import {connect} from "react-redux";

/** Balance UI Component **/
const Balance =  (props) => {

    return (
    <div onClick={() => props.insertBalance(props.id)}>
        You have {props.balance.toFixed(2)} {props.currency}
    </div>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    insertBalance: A.insertBalance,
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)