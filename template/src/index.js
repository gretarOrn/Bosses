import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/site.css';
import '../styles/site.less';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { getBosses } from './actions/BossActions';
import reducers from './reducers';

//getBosses();
const AppWithRedux = connect(null, { getBosses })(App);

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk))}><Router><AppWithRedux /></Router></Provider>, document.getElementById('app'));
