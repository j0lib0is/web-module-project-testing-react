import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const epNewDescription = {
	image: 'https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg',
	name: 'Chapter One: The Vanishing of Will Byers',
	number: 1,
	season: 1,
	summary: 'This is a new summary statement.',
	url: 'https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
}

const epNoImage = {
	image: null,
	name: 'Chapter One: The Vanishing of Will Byers',
	number: 1,
	season: 1,
	summary: 'A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boys friends conduct their own search, and meet a mysterious girl in the forest.',
	url: 'https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
}


test('renders without error', () => {
	render(<Episode episode={epNewDescription}/>);
});

test('renders the summary test passed as prop', () => {
	// Arrange
	render(<Episode episode={epNewDescription}/>);
	// Act
	const summary = screen.queryByText(/this is a new summary statement./i);
	// Assert
	expect(summary).toBeInTheDocument();
	expect(summary).toBeVisible();
	expect(summary).toHaveTextContent('This is a new summary statement.');
});

test('renders default image when image is not defined', () => {
	// Arrange
	render(<Episode episode={epNoImage}/>);
	// Act
	const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
	// Assert
	expect(image).toBeInTheDocument();
});
