import React from 'react';
import './feedbackCard.css'
import icon  from './feedbackIcon.png'

const FeedbackCard = ({ userName, feedback, proPic }) => {

  
    
  return (
    <div className='feedbackCard'>
        <img src = {proPic} alt ='Profile picture' className='feedbackCardPropic'/>
        <br/>
        <span className='feedbackCardName'>{userName}</span><br/>
        <img src =  {icon} alt='icon' className='feedbackCardIcon'/><br/>
        <span className='feedbackCardContext'>"{feedback}"</span>


      
    </div>
  );
};

export default FeedbackCard;



