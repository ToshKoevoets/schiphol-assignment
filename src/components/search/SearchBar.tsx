/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import "./search-bar.css"

const propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof propTypes>;

const SearchBar: React.FC<ComponentTypes> = ({ setSearchTerm, searchTerm }) => {
  return <div className="search-bar">
    <label>
      <label htmlFor="search-input" className="search-bar__label">Find <br />Departures</label>
      <div className="search-bar__wrapper">
        <input
          id="search-input"
          aria-label="Find Departures"
          value={searchTerm}
          className="search-bar__input"
          placeholder="Eg: San Francisco"
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        {searchTerm.length > 0 && <button className="search-bar__clear" onClick={() => {
          setSearchTerm('');
        }}>✕</button>}
      </div>
    </label>
  </div>
}

export default SearchBar;