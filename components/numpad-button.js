import React from 'react'
import styled from 'styled-components';

const NumpadButton = styled.div`
  height: 100%;
  width: 100%; 

  background-color: white;
  color: darkgray;
  display: inline-flex;
  
  // justify cell content horizontally and vertically 
  justify-content: center;
  align-items: center;
  
  // font settings
  font-family: Arial;
  font-size: 4vh;      
`


/** Single NumPad button **/
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pressed: false}
    }

    onMouseDown() {
        this.setState({pressed: true});

    }

    onMouseUp() {
        this.setState({pressed: false});
        this.props.onPress(this.props.symbol)
    }

    onMouseLeave() {
        this.setState({pressed: false});
    }

    onMouseEnter() {
        this.setState({pressed: false});
    }

    render() {

        let style = {};
        if (this.state.pressed === true) {
            style = { color: "white", backgroundColor: "lightgray"};
        } else {
            style = { color: "#444444", backgroundColor: "white"};
        }

        return (
            <NumpadButton style={style}
                          onMouseDown={this.onMouseDown.bind(this)}
                          onMouseLeave={this.onMouseLeave.bind(this)}
                          onMouseEnter={this.onMouseEnter.bind(this)}
                          onMouseUp={this.onMouseUp.bind(this)}
            >
                {this.props.symbol}

            </NumpadButton>
        )
    }

}



