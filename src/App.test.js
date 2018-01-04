import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

// shallow + redux
import { connected } from 'index.testing';
import { App } from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

it('renders correctly', () => {
	const tree = mount(<App />);
});
