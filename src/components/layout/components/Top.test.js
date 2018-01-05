import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Top } from './Top';

it('renders correctly', () => {
	const tree = renderer.create(shallowConnected(<Top />)).toJSON();
	expect(tree).toMatchSnapshot();
});
