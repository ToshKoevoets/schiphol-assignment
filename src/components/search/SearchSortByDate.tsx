/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  setSortByDate: PropTypes.func.isRequired,
};

type ComponentTypes = InferProps<typeof propTypes>;

/* ↓ */
const SearchSortByDate: React.FC<ComponentTypes> = ({ setSortByDate }) => {
  return <div className="search-sort-by-date">
    <button onClick={setSortByDate}>
      Arrival Time	↑
    
    </button>
  </div>
}

export default SearchSortByDate;