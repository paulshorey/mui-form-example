import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

function connected(children) {
	class Result extends React.Component {
		render() {
			return (
				<Provider store={store} key="testing!" id="testing!">
					<Router>
						<Switch>{this.props.children}</Switch>
					</Router>
				</Provider>
			);
		}
	}
	return enzyme.render(<Result>{children || null}</Result>);
}
function shallowConnected(children) {
	class Result extends React.Component {
		render() {
			return (
				<Provider store={store} key="testing!" id="testing!">
					<Router>
						<Switch>{this.props.children}</Switch>
					</Router>
				</Provider>
			);
		}
	}
	return enzyme.shallow(<Result>{children || null}</Result>);
}
function shallow(children) {
	class Result extends React.Component {
		render() {
			return (
				<div key="testing!" id="testing!">
					{this.props.children}
				</div>
			);
		}
	}
	return enzyme.shallow(<Result>{children || null}</Result>);
}

export { shallow, connected, shallowConnected };
