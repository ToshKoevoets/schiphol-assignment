/**
 * Component responsible for managing data and state for the SearchBar and SearchList
 */
import React, { useEffect, useState } from 'react';
import FlightsService from '../../services/FlightsService';
import { Flight } from '../../types/Flight';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

import { defaultMaxResultsPerPage, minimumCharactersForSearch  } from './constants';
import SearchSortOrder from './SearchSortOrder';
import { SortTypes } from '../../types/Sort';
import './search-container.css';


const SearchContainer: React.FC = () => {
  // most cases search / sort would be handled by a backend api
  const [allFlights, setAllFlights] = useState<Flight[] | []>([]);
  const [searchedFlights, setSearchedFlights] = useState<Flight[] | []>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  // set default to loading on first mount
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<SortTypes.ASC | SortTypes.DESC>(SortTypes.DESC);
  
  // nice to move loading / error logic to a custom hook and/or hoc or parent component for display loading  & error messages
  const getFlights = async () => {
    try {
      setLoading(true);
      const allFlights = await FlightsService.getFlights();
      setAllFlights(allFlights);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      console.log(e);
    }
  }

  /**
   * Get All Flights on Component Mount
   */
  useEffect(() => { 
    getFlights();
  }, []);

  /**
   * Search & Filter Flights based on Search Term
   * @todo: add debounce to prevent unnecessary api calls
   */
  useEffect(() => {    
    if (searchTerm.length >= minimumCharactersForSearch ) {
      const searchResults = FlightsService.searchFlights(allFlights, searchTerm);
      const sortedResults = FlightsService.sortFlights(searchResults, sortOrder);
      setSearchedFlights(sortedResults.slice(0, defaultMaxResultsPerPage));
    } else {
      setSearchedFlights([]);
    }
  }, [searchTerm, allFlights, sortOrder] );

  return <div className="search-container">
    <div className="search-container__content">
      {/* Placeholders: errors & loading should be nicer & informative in a real application */}
      {error && <p>Error fetching all the flight info...</p>}

      {loading ? <p>Loading all flight info...</p> : 
      <>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        {/** Render the search results and meta data **/}
        {searchTerm.length > 2 && 
          <>
            <div className="search-results__details">
              <p>Showing {searchedFlights.length} Flights</p>
              <SearchSortOrder setSortOrder={setSortOrder} sortOrder={sortOrder} />
            </div>
            <SearchList flights={searchedFlights} />
          </>
        }
      </>
      }
    </div>
  </div> 
}

export default SearchContainer;