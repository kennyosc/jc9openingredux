import React from 'react'
import ReactDOM from 'react-dom'
//ini yang akan menghubungkan redux dengan react
import { Provider } from 'react-redux'
//ini untuk create STORE dan apply middleware
import { createStore, applyMiddleware } from 'redux'

//kalau .js dapat tidak ditulis
import App from './components/App.js'
import reducers from './reducers/index.js'

//redux-logger untuk melihat log apa saja yang terjadi di database STORE kita (database lama - action - database baru)
import logger from 'redux-logger'


//function yang digunakan untuk membuat storage/store/state
//applyMiddleware adalah function yang digunakan untuk memasukkan middleware dengan synthax applyMiddleware()
var STORE = createStore(reducers, applyMiddleware(logger))

//STORE yang di atas akan dimasukkan ke dalam APP dengan menggunakan PROVIDER (yang akan menghubungkan react dengan redux)
ReactDOM.render(
    <Provider store = {STORE}>
        <App/>
    </Provider>
    , document.getElementById('root')
)