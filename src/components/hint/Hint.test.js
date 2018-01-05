import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { Hint } from './Hint';

it('renders correctly', () => {
	const tree = renderer
		.create(
			shallowConnected(
				<Hint title="the title" description={<p>This can be a react component!</p>} />
			)
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
