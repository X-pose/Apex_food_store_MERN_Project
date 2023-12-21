import React from 'react'
import './fav_order_card.css'
import backgroundImage from '../../assets/chicken_burger.jpg'

function FavOrderCard() {
  return (
    <div className='fav-order-card-container'>
        <div className='fav-order-card'>
            <div className='fav-order-card-header'>
                <span id='fav-order-card-header-title'>Chicken Noodles</span>
            </div>
            <div className='fav-order-card-body'>
            <img id="uploaded-image" alt="" src={backgroundImage} width={120} height={120} />
            </div>
        </div>
    </div>
  )
}

export default FavOrderCard