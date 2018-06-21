import React from 'react';
import SearchBar from '../components/Home/SearchBar';
import LocationMenu from '../components/Home/LocationMenu';

const Home = props => (
  <div>
    <SearchBar submitSearch={props.submitSearch} />
    <LocationMenu />
  </div>
);

export default Home;
