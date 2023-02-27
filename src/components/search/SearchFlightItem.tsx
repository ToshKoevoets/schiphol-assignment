/**
 * Component responsible for rendering a Search Item
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import "./search-flight-item.css";
import {FRONTEND_URL} from '../../constants';

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
  return <a href={`${FRONTEND_URL}${url}`} className="search-flight-item">
    <div className="search-item__flight-airport">
      <h4 className="search-item__flight-airport">
        Arriving Time
      </h4>
      <p>
        {expectedTime} ({originalTime})
      </p>
    </div>
    <div>
      <h4 className="search-item__flight-airport">
        {airport}
      </h4>
      <p>
         Flight nr: {flightNumber}
      </p>
    </div>
    <div>
      <h4 className="search-item__flight-airport">
         Flight Identifier
      </h4>
      <p>
        {flightIdentifier}
      </p>
    </div>
    <div>
        <span>
        → 
        </span>
    </div>
  </a>
}

export default React.memo(SearchFlightItem);