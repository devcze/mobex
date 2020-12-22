import styled from 'styled-components';

const Switcher = styled.div`
    font-size: 5vh;
    font-weight: 900;
       
`
/** Currency swap switcher **/
export default (props) =>

        <Switcher onClick={props.currencySwitched}>
            ↑↓
        </Switcher>



