import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpecificErrorBoundary from 'components/error/SpecificErrorBoundary';
import Async from 'react-code-splitting';

/*
	simulate API request
*/
setTimeout(function() {
	window.store.deviceInfo = {
		model: 'XWC1001',
		firmware: 'abc123',
	};
}, 100);

/*
	list pages for <Switch />
*/
var routes = [
	{
		url: '/XWC1001',
		component: () => <Async load={import('devices/XWC1001')} />,
	},
	{
		url: '/XWC1000',
		component: () => <Async load={import('devices/XWC1000')} />,
	},
];
routes.login = {
	url: '/',
	component: () => <Async load={import('pages/session/PageLogin')} />,
};

export class App extends React.Component {
	render() {
		const { ubus } = this.props;

		/*
			build list of <Route />s
		*/
		var Routes = [];
		routes.forEach(function(route, index) {
			if (route.component) {
				Routes.push(<Route key={route.url} path={route.url} component={route.component} />);
			}
		});

		/*
			render <Route />s
		*/
		return (
			<Router>
				<Switch>
					{/*
					Auto-built urls
					*/}
					{Routes}

					{/*
					Default url: login
					*/}
					<Route
						key={routes.login.url}
						path={routes.login.url}
						component={routes.login.component}
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
