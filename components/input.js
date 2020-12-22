import React from 'react'

import styled from 'styled-components';

// Redux
import {connect} from 'react-redux'
import A from '../redux/actions';

const InputSectionStyle = styled.div`
  height: 100%;
  width: 100%;
  font-size: 5vh;
  // font-size: 4em;
    
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  
  .active {
        border-right: 3px solid #ffffff;
        text-decoration: none;
          animation: border-pulsate 2s infinite;
        
          @keyframes border-pulsate {
          0% {
            border-color: #ffffff;
          }
          50% {
            border-color: #ffffff00;
          }
          100% {
            border-color: #ffffff;
          }
        }
    } 
`

const Currency = styled.div`
  text-align: left;
  width: 20%;  
`

/** Input row for source and target exchange input **/
class InputSection extends React.Component {


    constructor(props) {
        super(props)
    }

    render()  {

        let active = "";
        if (this.props.id === this.props.activeInput) {
            active = "active"
        }

        return (
            <InputSectionStyle>
                <Currency onClick={this.props.currencySelectionRequested}>
                    {this.props.currency}
                </Currency>

                <div className={active}>
                {this.props.prefix}
                {this.props.userInput === "" ? "0" : this.props.userInput}
                </div>


            </InputSectionStyle>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    currencySelectionRequested: A.currencySelectionRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSection)

