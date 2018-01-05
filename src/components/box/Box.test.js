import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Box } from './Box';

it('renders correctly', () => {
	const tree = renderer
		.create(
			shallowConnected(
				<Box
					box={{
						theme: '',
						title: '',
						icon: '',
						Children: <div>hello</div>,
						TopChildren: <span />,
					}}
				/>
			)
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
