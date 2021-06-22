import { render, screen } from '@testing-library/react';

import SearchBar from '..';

describe('SearchBar', () => {
	test('render SearchBar component by getByText', async () => {
		render(<SearchBar/>);
		screen.getByText('Search:');
		expect(screen.getByText('Search:')).toBeInTheDocument();
		expect(screen.queryByText('IAMHERE')).toBeNull();
	})

	test('render SearchBar component by getByRole', () => {
		render(<SearchBar/>);
		screen.getByRole('textbox');
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	})
})