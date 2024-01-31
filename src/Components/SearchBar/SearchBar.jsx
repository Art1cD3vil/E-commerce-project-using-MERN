
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import allProducts from '../Assets/all_product';
import './SearchBar.css';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);

    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(value) &&
        (product.category === 'boots' || product.category === 'apparels')
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="search-container">
       <input
        type="text"
        placeholder="Search for boots or apparels..."
        value={searchQuery}
        onChange={handleInputChange}
        
      />
      {searchQuery && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  width="100px"
                  height="100px"
                  alt={product.name}
                  className="product-image"
                />
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
