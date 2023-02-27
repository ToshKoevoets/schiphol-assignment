/**
 * Component responsible for rendering the Search Bar
 */
import React from 'react';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import SearchContainer from '../components/search/SearchContainer';

const SearchPage: React.FC = () => {
  return <div>
    <Header />
    <main>
      <SearchContainer />
    </main>
    <Footer />
  </div>
}

export default SearchPage;