// react
import React from 'react';
import ReactDOM from 'react-dom';

// shallow + redux
import { connected } from 'index.testing';

// component
import Layout from './Layout';

// ok...
it('renders children :: Layout', () => {
	const result = connected(
		<Layout>
			<h1 id="testApp">Hello!</h1>
		</Layout>
	);

	expect(result.find('#testApp').type()).toBe('h1');
});
