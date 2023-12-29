import React from 'react';
import './feedbackCard.css'

const FeedbackCard = ({ userName, feedback, proPic }) => {

    
  return (
    <div className='feedbackCard'>
        <image src = {proPic} className='feedbackCardPropic'/>
        <span className='feedbackCardName'>{userName}</span>
        <image src = ''className='feedbackCardIcon'/>
        <span className='feedbackCardContext'>"{feedback}"</span>


      
    </div>
  );
};

export default FeedbackCard;



