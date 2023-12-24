import React, { useState, useEffect } from 'react';
import './Searchfood.css'; // Import the CSS file for styling

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data.getitem);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>





<div className="search2">
        <input className='search'
          type="text"
          placeholder="Search by item name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    <div className="item-grid">
    {filteredItems.map((item) => (
        <div key={item._id} className="item-card">
          <div className="item-image">
            {item.itemImage && (
              <img src={item.itemImage} alt={item.itemName} />
            )}
          </div>
          <div className="item-details">
            <h3>{item.itemName}</h3>
            <p>{item.itemDescription}</p>
            <p>${item.itemPrice}</p>
            {/* Add more item properties as needed */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ItemList;