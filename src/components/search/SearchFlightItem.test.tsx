import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchFlightItem from './SearchFlightItem';
import { Flight } from '../../types/Flight';

const dummyFlightData: Flight = {
  flightNumber: 'flightNumber',
  airport: 'Amsterdam',
  flightIdentifier: 'flightIdentifier',
  expectedTime: '123',
  url: '123',
  originalTime: '123',
  score: '123',
}

/**
 * This test when rendering a flight item if the flight number is displayed
 */
test('When Rendering a Flight Item should display Flight number', (): void => {
  render(<SearchFlightItem 
    {...dummyFlightData}
  />);

  const flightNrElement = screen.getByText(/flightIdentifier/i);
  expect(flightNrElement).toBeInTheDocument();
});

/**
 * This test when rendering if a  Flight identifier is displayed
 */
test('When Rendering a Flight Item should display Flight identifier', (): void => {
  render(<SearchFlightItem
    {...dummyFlightData}
  />);

  const flightIdentifierElement = screen.getByText(/flightIdentifier/i);
  expect(flightIdentifierElement).toBeInTheDocument();
});
