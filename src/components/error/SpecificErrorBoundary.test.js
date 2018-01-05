import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { SpecificErrorBoundary } from './SpecificErrorBoundary';

it('renders correctly', () => {
	const tree = renderer
		.create(
			shallowConnected(
				<SpecificErrorBoundary location="/">No error - just testing :)</SpecificErrorBoundary>
			)
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
