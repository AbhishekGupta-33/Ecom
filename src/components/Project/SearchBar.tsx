import React from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
  query: string;
  setQuery: (text: string) => void; // Function to update the query
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <Searchbar
      placeholder="Search"
      value={query}
      onChangeText={setQuery}
      // Optionally, you can add more props for additional functionality
      // onIconPress={() => console.log('Icon pressed')}
      // onSubmitEditing={() => console.log('Search submitted')}
    />
  );
};

export default SearchBar;