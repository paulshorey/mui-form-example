import React from 'react';
import renderer from 'react-test-renderer';

import Bottom from './Bottom';

it('renders correctly', () => {
	const tree = renderer.create(<Bottom />).toJSON();
	expect(tree).toMatchSnapshot();
});
