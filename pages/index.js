import ExchangeRedux from '../components/exchange-redux'
import styled from 'styled-components';

const Container = styled.div`

  width: 100vw;
  height: 100vh;
  // width: 600px;
  //height: 800px;
  background-color: black;
  // padding: 5px;
  //margin: 5px;
`

/** Index page containing all content **/
export default () =>
    <Container>

        <ExchangeRedux/>
    </Container>
