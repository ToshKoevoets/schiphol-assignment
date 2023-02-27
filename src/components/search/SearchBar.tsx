/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import "./search-bar.css"

const propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

type ComponentTypes = InferProps<typeof propTypes>;

const SearchBar: React.FC<ComponentTypes> = ({ setSearchTerm }) => {
  return <div className="search-bar">
    <label>
      <label htmlFor="search-input">Find Departures</label>
      <input
        id="search-input"
        className="search-bar__input"
        placeholder="Eg: Amsterdam"
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
      />
    </label>
  </div>
}

export default SearchBar;