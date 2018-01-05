import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Layout } from './Layout';

it('renders correctly', () => {
	const tree = renderer
		.create(
			shallowConnected(
				<Layout>
					<div />
				</Layout>
			)
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
