import NumpadButton from '../components/numpad-button'

import styled from 'styled-components';

const Numpad = styled.div`
  height: 100%;
  grid-gap: 1px;   

  background-color: darkgray;
  color: black;
  
  display: grid;
  grid-template-columns: auto auto auto;         
`

/** Numpad component used for typing numbers **/
export default (props) =>
    <Numpad>

        <NumpadButton symbol="1" onPress={props.onPress} />
        <NumpadButton symbol="2" onPress={props.onPress} />
        <NumpadButton symbol="3" onPress={props.onPress} />

        <NumpadButton symbol="4" onPress={props.onPress} />
        <NumpadButton symbol="5" onPress={props.onPress} />
        <NumpadButton symbol="6" onPress={props.onPress} />

        <NumpadButton symbol="7" onPress={props.onPress} />
        <NumpadButton symbol="8" onPress={props.onPress} />
        <NumpadButton symbol="9" onPress={props.onPress} />

        <NumpadButton symbol="." onPress={props.onPress} />
        <NumpadButton symbol="0" onPress={props.onPress} />
        <NumpadButton symbol="↤" onPress={props.onPress} />

    </Numpad>



