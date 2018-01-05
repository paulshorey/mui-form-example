import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { PrimaryErrorBoundary } from './PrimaryErrorBoundary';

it('renders correctly', () => {
	const tree = renderer
		.create(
			shallowConnected(
				<PrimaryErrorBoundary location="/">No error - just testing :)</PrimaryErrorBoundary>
			)
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
