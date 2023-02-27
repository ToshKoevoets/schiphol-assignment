/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { SortTypes } from '../../types/Sort';
import './search-sort-order.css';

const propTypes = {
  setSortOrder: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof propTypes>;
/* ↓ 
  Downside of InferProps is that proptypes are limited in type checking.
*/
const SearchSortOrder: React.FC<ComponentTypes> = ({ setSortOrder, sortOrder }) => {
  return <div className="search-sort-order">
    <button onClick={() => {
      // simple toggle will suffice for now
      setSortOrder(sortOrder === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC);
    }} className="search-sort-order__button">
      Arrival Time  {SortTypes.ASC === sortOrder ? '↑' : '↓'}
    </button>
  </div>
}

export default SearchSortOrder;