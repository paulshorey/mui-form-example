import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'components/layout/Layout';

/*
	list pages for <Nav /> and <Switch />
*/
window.store.deviceInfo = {
	model: 'XWC-1000',
	firmware: 'abc-123',
};
const routes = [
	{
		title: 'Status',
		children: [
			{
				title: 'Controller',
				url: '/XWC1000/status/controller',
				component: function() {
					return require('pages/status/Controller').default;
				},
			},
			{
				title: 'AP',
				url: '/XWC1000/status/ap',
				component: function() {
					return require('pages/status/AP').default;
				},
			},
		],
	},
	{
		title: 'Profile Management',
		children: [
			{
				title: 'AP Management',
				url: '/XWC1000/profiles/ap_management',
				component: function() {
					return require('pages/profiles/APManagement').default;
				},
			},
			{
				title: 'AP Assignment',
				url: '/XWC1000/profiles/ap_assignment',
				component: function() {
					return require('pages/profiles/APAssignment').default;
				},
			},
			{
				title: 'SSID Management',
				url: '/XWC1000/profiles/ssid_management',
				component: function() {
					return require('pages/profiles/SSIDManagement').default;
				},
			},
			{
				title: 'Wireless Settings',
				url: '/XWC1000/profiles/wireless_settings',
				component: function() {
					return require('pages/profiles/WirelessSettings').default;
				},
			},
		],
	},
	{
		title: 'VLAN',
		url: '/XWC1000/vlan',
		component: function() {
			return require('pages/vlan/VLAN').default;
		},
	},
	{
		title: 'Controller Settings',
		url: '/XWC1000/controller',
		component: function() {
			return require('pages/controller/NetworkSettings').default;
		},
	},
	{
		title: 'Examples',
		children: [
			{
				title: 'Network',
				url: '/XWC1000/examples/network',
				component: function() {
					return require('pages/examples/Network').default;
				},
			},
			{
				title: 'Validation',
				url: '/XWC1000/examples/validation',
				component: function() {
					return require('pages/examples/Validations').default;
				},
			},
		],
	},
];
routes.pageNotFound = {
	title: 'Page Not Found',
	component: () => {
		return require('pages/000/404').default;
	},
};

export class XWC1000 extends React.Component {
	/*
		build list of <Route />s
	*/
	renderRoutes(routes) {
		const Routes = [];
		routes.forEach((route, index) => {
			/*
				first add children
			*/
			if (route.children) {
				route.children.forEach((route, subindex) => {
					Routes.push(
						<Route
							exact
							key={index.toString() + subindex.toString()}
							path={route.url}
							render={() => {
								var RouteComponent = route.component();
								return <RouteComponent {...this.props} page={route} />;
							}}
						/>
					);
				});
			}
			/*
				then add self
			*/
			if (route.component) {
				Routes.push(
					<Route
						exact
						key={index}
						path={route.url}
						render={() => {
							var RouteComponent = route.component();
							return <RouteComponent {...this.props} page={route} />;
						}}
					/>
				);
			}
		});
		/*
			return list of components
		*/
		return Routes;
	}

	render() {
		return (
			<Layout history={this.props.history} routes={routes}>
				{/* Link urls */}
				<Switch>
					{/* No url */}
					<Redirect exact from="/XWC1000" to="/XWC1000/status/controller" />
					{/* Auto-built device-specific urls */}
					{this.renderRoutes(routes)}
				</Switch>
			</Layout>
		);
	}
}

export default XWC1000;
