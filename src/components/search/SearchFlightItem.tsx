/**
 * Component responsible for rendering a Search Item
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import "./search-flight-item.css"

const propTypes = {
  flightNumber: PropTypes.string.isRequired,
  flightIdentifier: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
  expectedTime: PropTypes.string.isRequired,
  originalTime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof propTypes>;

const SearchFlightItem: React.FC<ComponentTypes> = ({ flightNumber, flightIdentifier, airport, expectedTime, originalTime, url }) => {
  console.log('rendering SearchFlightItem', flightNumber);

  return <a href={url} className="search-flight-item" >
    <h3 className="search-item__flight-number">
      {flightNumber}
    </h3>
    <h3 className="search-item__flight-identifier">
      {flightIdentifier}
    </h3>
    <h3 className="search-item__flight-airport">
      {airport}
    </h3>
    <h3 className="search-item__flight-airport">
      Expected: {expectedTime}{originalTime}
      Status: On Time
    </h3>
  </a>
}

export default React.memo(SearchFlightItem);