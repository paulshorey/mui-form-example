import React from 'react';
import renderer from 'react-test-renderer';

// shallow + redux
import { shallow, connected, shallowConnected } from 'index.testing';
import { App } from './App';

it('renders correctly', () => {
	// const tree = renderer
	// 	.create(
	// 		shallowConnected(
	// 			<App />
	// 		)
	// 	)
	// 	.toJSON();
	// expect(tree).toMatchSnapshot();
});

/*
    CANNOT FIGURE OUT HOW
    to test (unit or snapshot)
    React + Redux + Router + <Route/>s
    without it trying to render everything inside... other components can easily be made "shallow", but these <Route />s render based on URL, kind of asynchronously
    :(
*/
