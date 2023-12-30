import React, { useState } from 'react';
import './faqList.css'

const FaqList = ({ queries }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
    console.log("Index here : " + expandedItem)
  };
  if (!Array.isArray(queries)) {
    // You can handle the case where queries is not an array (e.g., show a message)
    return <p>No queries available.</p>;
  }
  return (
    <ul className='customULlist'>
      {queries.map((faq, index) => (
        <li key={faq._id} onClick={() => handleItemClick(index)} className='faqItem'>
          <span className='faqQuestion'> Q : {faq.faqQuestion}</span>
          {expandedItem === index && <div className='faqAnswer'><p > <hr className='hr'/>A : {faq.faqAnswer}</p></div>}
        </li>
      ))}
    </ul>
  );
};

export default FaqList;
