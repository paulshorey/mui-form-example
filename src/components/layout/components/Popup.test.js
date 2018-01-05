import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Popup } from './Popup';

it('renders correctly', () => {
	const tree = renderer.create(shallowConnected(<Popup />)).toJSON();
	expect(tree).toMatchSnapshot();
});
