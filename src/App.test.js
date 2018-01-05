import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { connected, shallowConnected } from 'index.testing';
import { App } from './App';

// extras for routing
import { Route } from 'react-router';
import { shallow } from 'enzyme';

it('renders correctly', () => {
	const wrapper = shallow(<App />);
	const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
		const routeProps = route.props();
		pathMap[routeProps.path] = routeProps.component;
		return pathMap;
	});
});

/*
    This basically only checks for errors.
    If the component (Routes) renders anything at all, without errors, then test is successful.
*/
