import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow } from 'index.testing';
import { Message } from './Message';

it('renders correctly', () => {
	const tree = renderer
		.create(shallow(<Message message={{ title: 'Hello!', opened: true }} />))
		.toJSON();
	expect(tree).toMatchSnapshot();
});
