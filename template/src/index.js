import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/site.css';
import '../styles/site.less';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { getBosses } from './actions/BossActions';
import reducers from './reducers';
import Navbar from './components/Navbar/Navbar';
import FrontPage from './components/FrontPage/FrontPage';
import Bosses from './components/Bosses/Bosses';
import Boss from './components/Boss/Boss';

class Application extends React.Component {
    componentDidMount() {
      this.props.getBosses();
    }
    render() {
      return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ FrontPage }/>
                <Route exact path="/bosses" component={ Bosses }/>
                <Route path='/bosses/:id' component={ Boss } />
            </Switch>
        </>
      );
    }
  }
  
  const AppWithRedux = connect(null, { getBosses })(Application);

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk))}><Router><AppWithRedux /></Router></Provider>, document.getElementById('app'));
