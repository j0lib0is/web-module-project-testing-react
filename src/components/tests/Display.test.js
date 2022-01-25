import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

import fetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

test('renders without errors with no props', () => {
	render(<Display/>);
});

test('renders Show component when the button is clicked ', async () => {
	fetchShow.mockResolvedValueOnce({
		name: 'Test Show Name',
		image: null,
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
			{
				id: '4',
				name: 'Test Season 4',
				episodes: [],
			},
		],
	});
	
	// Arrange
	render(<Display/>);
	// Act
	const button = screen.queryByRole('button');
	userEvent.click(button);
	// Assert
	const showComp = await screen.findByTestId('show-container');
	expect(showComp).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async () => {
	// // Arrange
	// render(<Display />);
	// // Act
	// const button = screen.queryByRole('button');
	// userEvent.click(button);
	// // Assert
	// const seasons = await screen.findAllByTestId('season-option');
	// expect(seasons).toHaveLength(4);
});

test('test optional functional prop is called when fetch button is pressed', () => {
	// const mockDisplayFunc = jest.fn();
	// // Arrange
	// render(<Display displayFunc={mockDisplayFunc}/>)
	// // Act
	// const button = screen.queryByRole('button');
	// userEvent.click(button);
	// // Assert
	// expect(mockDisplayFunc).toHaveBeenCalled();
});
