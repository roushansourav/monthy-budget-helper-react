import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/welcome';
import * as serviceWorker from './serviceWorker';
import Daily from './components/daily'
import {
	BrowserRouter as Router, Switch,
	Route} from 'react-router-dom';

	const App =(props)=>{
		return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/daily">
						<Daily />
						</Route>
        </Switch>
      </Router>
    );
	}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
