import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from "redux-saga";
import Main from "./main";
import rootReducer from "./rootreducer";
import mySaga from "./sagas";
import './styles/bootstrap.min.css';
// import './styles/app.css';

let sagaMw = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMw));
sagaMw.run(mySaga); /// Order matters!!!

ReactDom.render(<Provider store={store}><Main /></Provider>, document.getElementById("container"));
