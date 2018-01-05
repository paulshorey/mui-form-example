import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { XWC1001 } from './index';

it('renders correctly', () => {
	const tree = renderer.create(shallowConnected(<XWC1001 />)).toJSON();
	expect(tree).toMatchSnapshot();
});
