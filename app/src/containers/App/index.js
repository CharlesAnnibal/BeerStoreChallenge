import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {GlobalStyle, AppStyle} from './style'
import Routes from './routes'
import store from '../../store/index'

export default class App extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <AppStyle>
                    <GlobalStyle whiteColor/>
                    <Routes/>
                </AppStyle>
            </Provider>
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))