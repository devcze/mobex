import {connect} from "react-redux";
import A from "../redux/actions"
import React from 'react'

import styled from 'styled-components';

const CurrencyListStyle = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background-color: white;
  color: black;     
    .success {
        background-color: mediumseagreen;
    }    
    .error {
        background-color: tomato;
    }
`
const Item = styled.div`    
    padding: 5vw;
    padding-top: 2em;
    padding-bottom: 2em;
    color: white;    
    
    font-size: 1.2em;   
    border-bottom: 1px solid lightgray;
`

/** Information related to exchange action **/
class Info extends React.Component {

    render() {

        let messageType = "success"
        if (this.props.message.success === false) messageType = "error";

        return (
            <CurrencyListStyle>
                <Item className={messageType}
                      onClick={this.props.exchangeDetailsClosed}>{this.props.message.text}</Item>
            </CurrencyListStyle>
        )
    }

    componentDidMount() {
        const Timeout = 7000; // 7s
        this.timeout = setTimeout(() => this.props.exchangeDetailsClosed(), Timeout)

    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
}


const mapStateToProps = state => {
    return {message: state.message}
}

const mapDispatchToProps = {
    currencySelected: A.currencySelected,
    exchangeDetailsClosed: A.closeExchangeDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)