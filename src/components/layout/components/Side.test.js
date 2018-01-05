import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Side } from './Side';

it('renders correctly', () => {
	const tree = renderer.create(shallowConnected(<Side />)).toJSON();
	expect(tree).toMatchSnapshot();
});
