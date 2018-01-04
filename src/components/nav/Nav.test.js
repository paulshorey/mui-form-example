import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Nav } from './Nav';

it('renders correctly', () => {
	const tree = renderer
		.create(
			shallowConnected(
				<Nav
					routes={[
						{
							title: 'Status',
							children: [
								{
									title: 'Controller',
									url: '/XWC1001/status/controller',
									render: <div />,
								},
							],
						},
					]}
				/>
			)
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
