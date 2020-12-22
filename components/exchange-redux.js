import React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../redux/reducer'
import logger from 'redux-logger'
import A from '../redux/actions'
import fetch from 'isomorphic-fetch'

// UI Components
import Exchange from '../components/exchange'
import GlobalStyle from '../components/style/global-style'

//const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer);

/** Exchange component redux wrapper **/
export default class Index extends React.Component {

    async componentDidMount() {
        const data = await this.loadData();
        const ms = 5000; // 5s

        this.inteval = setInterval(async () =>
            await this.loadData(), ms
        )

        window.addEventListener('keydown', (e) => {
            store.dispatch(A.keyDown(e.key))
        })

        return data;
    }

    componentWillUmount() {
        clearInterval(this.inteval);
    }

    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <Exchange/>
            </Provider>
        )
    }

    async loadData() {

        try {
            const api = await fetch("http://149.28.243.141:4000/api/v1/latest")
            const data = await api.json();
            store.dispatch(A.ratesUpdated(data.rates))

        } catch (e) {
            store.dispatch(A.ratesNotFetched())
        }
    }
}

