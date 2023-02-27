/**
 * Component responsible for managing data and state for the SearchBar and SearchList
 */
import React, { useEffect, useState } from 'react';
import FlightsService from '../../services/FlightsService';
import { Flight } from '../../types/Flight';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

import { defaultMaxResultsPerPage, minimumCharactersForSearch  } from './constants';
import SearchSortByDate from './SearchSortByDate';

enum SortTypes {
  ASC = "ASC",
  DESC = "DESC",
}

const SearchContainer: React.FC = () => {
  // most cases search / sort would be handled by a backend api
  const [allFlights, setAllFlights] = useState<Flight[] | []>([]);
  const [searchedFlights, setSearchedFlights] = useState<Flight[] | []>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortByDate, setSortByDate] = useState<SortTypes.ASC | SortTypes.DESC>(SortTypes.DESC);
  
  const getFlights = async () => {
    try {
      const allFlights = await FlightsService.getFlights();
      setAllFlights(allFlights);
    } catch (e) {
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
    console.log('sortByDate', sortByDate)
    if (searchTerm.length >= minimumCharactersForSearch ) {
      const searchResults = FlightsService.searchFlights(allFlights, searchTerm);
      const sortedResults = FlightsService.sortFlights(searchResults, sortByDate);
      setSearchedFlights(sortedResults.slice(0, defaultMaxResultsPerPage));
    } else {
      setSearchedFlights([]);
    }
  }, [searchTerm, allFlights, sortByDate] );


  return <div className="search-container">
    <SearchSortByDate setSortByDate={setSortByDate} />
    <SearchBar setSearchTerm={setSearchTerm} />
    {searchTerm.length > 2 && <SearchList flights={searchedFlights} />}
  </div> 
}

export default SearchContainer;