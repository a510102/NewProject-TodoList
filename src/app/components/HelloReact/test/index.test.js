import { render, screen } from '@testing-library/react';

import HelloReact from '..';

describe('Hello React', () => {
	test('render', () => {
		render(<HelloReact />)

		expect(screen.getByText('Hello React')).toBeInTheDocument();
	});
})