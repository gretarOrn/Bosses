import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import FrontPage from './FrontPage/FrontPage';
import Bosses from './Bosses/Bosses';
import Boss from './Boss/Boss';


class App extends React.Component {
    componentDidMount() {
      this.props.getBosses();
    }
    render() {
      return (
            <div>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ FrontPage }/>
                        <Route exact path="/bosses" component={ Bosses }/>
                        <Route exact path='/bosses/:id' component={ Boss } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;