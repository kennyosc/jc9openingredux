import React from 'react'
import ReactDOM from 'react-dom'
//ini yang akan menghubungkan redux dengan react
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//kalau .js dapat tidak ditulis
import App from './components/App.js'
import reducers from './reducers/index.js'


//function yang digunakan untuk membuat storage/store/state
var STORE = createStore(reducers)

//STORE yang di atas akan dimasukkan ke dalam APP dengan menggunakan PROVIDER (yang akan menghubungkan react dengan redux)
ReactDOM.render(
    <Provider store = {STORE}>
        <App/>
    </Provider>
    , document.getElementById('root')
)