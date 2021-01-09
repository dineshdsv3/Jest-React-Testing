import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);
it('Renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button />, div);
});

it('Renders button correctly', () => {
	const { getByTestId } = render(<Button label="click me" />);
	expect(getByTestId('button')).toHaveTextContent('click me');
});

it('Renders button correctly', () => {
	const { getByTestId } = render(<Button label="me" />);
	expect(getByTestId('button')).toHaveTextContent('me');
});

it('Matches Snapshot', () => {
	const tree = renderer.create(<Button label="click me" />).toJSON();
	expect(tree).toMatchSnapshot();
});
