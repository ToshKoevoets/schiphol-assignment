/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import SearchFlightItem from './SearchFlightItem';
// import { Flight } from '../../types/Flight';
import SearchNoResults from './SearchNoResults';
import './search-list.css';

const propTypes = {
  flights: PropTypes.array.isRequired,
};

type ComponentTypes = InferProps<typeof propTypes>;

const SearchList: React.FC<ComponentTypes> = ({ flights }) => {
  console.log('Rendering SearchList', flights);
  
  return <div className="search-list">
    {flights.length > 0 ?
      <>
        {flights.map((flight, index) => {
          return <SearchFlightItem
            key={index}
            flightNumber={flight.flightNumber}
            flightIdentifier={flight.flightIdentifier}
            airport={flight.airport}
            expectedTime={flight.expectedTime}
            originalTime={flight.originalTime}
            url={flight.url}
          />
        })}
      </>
      :
      <SearchNoResults />
    }
  </div>
}

export default SearchList;