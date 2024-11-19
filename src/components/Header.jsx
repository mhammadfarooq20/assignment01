import  { useState } from 'react';
import './Header.css';

// eslint-disable-next-line react/prop-types
const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass search term to parent component
  };

  return (
    <header className="header">
      <h1 className="header-logo">Movie Explorer</h1>
      <form className="header-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
