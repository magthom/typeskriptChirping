import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Details from './views/Details';
import Admin from './views/Admin';
import Compose from './views/Compose';

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path ="/"></Route>
					<Home />
				<Route exact path="/details/:id"></Route>
					<Details />
				<Route exact path="/admin/:id"></Route>
					<Admin />
				<Route exact path="/compose"></Route>
					<Compose />
			</Switch>
		</BrowserRouter>
	);
}

interface AppProps {}

export default App;
