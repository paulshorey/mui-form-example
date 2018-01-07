import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import PageLogin from './PageLogin';

it('renders correctly', () => {
	const tree = renderer.create(shallowConnected(<PageLogin />)).toJSON();
	expect(tree).toMatchSnapshot();
});
