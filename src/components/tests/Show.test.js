import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const show = {
	name: 'Test Show Name',
	summary: 'Test Show Description',
	seasons: [
		{
			id: '1',
			name: 'Test Season 1',
			episodes: [],
		},
		{
			id: '2',
			name: 'Test Season 2',
			episodes: [],
		},
		{
			id: '3',
			name: 'Test Season 3',
			episodes: [],
		},
	],
};

test('renders without errors', () => {
	render(<Show show={show} selectedSeason={'none'}/>);
});

test('renders Loading component when prop show is null', () => {
	// Arrange
	render(<Show show={null}/>);
	// Act
	const loading = screen.queryByText(/fetching data.../i);
	// Assert
	expect(loading).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', async () => {
	// Arrange
	render(<Show show={show} selectedSeason={'none'}/>);
	// Act
	const seasonOption = await screen.findAllByTestId('season-option');
	// Assert
	expect(seasonOption).toHaveLength(3);
});

test('handleSelect is called when an season is selected', async () => {
	// Arrange
	render(<Show show={show} selectedSeason={'none'}/>);
	// Act
	// const option = await screen.queryByText('Test Season 2');
	// const options = await screen.queryAllByRole('option');	
	// userEvent.selectOptions(options, 2);
	// Assert

});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
	// Arrange
	// render(<Show show={show} selectedSeason={'none'}/>);
	// Act
	// Assert
});
