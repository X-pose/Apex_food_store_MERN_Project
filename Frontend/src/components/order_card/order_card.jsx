import React from 'react'
import './order_card.css'
import backgroundImage from '../../assets/chicken_burger.jpg'

function OrderCard() {
  return (
    <div className='order-card-container'>
        <div className='order-card'>
            <div className='order-card-left'>
            <img id="uploaded-image" alt="" src={backgroundImage} width={115} height={115} />
            </div>
            <div className='order-card-right'>
                <div className='order-card-right-top'>
                    <div className='order-card-right-top-details'>
                        <span id='Detail-headers'>Name</span>
                        <span id='Detail-body'>Chiken Burger</span>
                    </div>
                    <div className='order-card-right-top-details'>
                        <span id='Detail-headers'>Size</span>
                        <span id='Detail-body'>Medium</span>
                    </div>
                    <div className='order-card-right-top-details'>
                        <span id='Detail-headers'>Price</span>
                        <span id='Detail-body'>Rs.760.00</span>
                    </div>

                </div>
                <div className='order-card-right-bottom'>
                    <div className='order-card-right-top-details'>
                        <span id='Detail-headers'>Order ID</span>
                        <span id='Detail-body'>C12-43</span>
                    </div>
                    <div className='order-card-right-top-details'>
                        <span id='Detail-headers'>Quantity</span>
                        <span id='Detail-body'>3</span>
                    </div>
                    <div className='order-card-right-top-details'>
                        <span id='Detail-headers'>Order Date</span>
                        <span id='Detail-body'>Rs.760.00</span>
                    </div>
                </div>
                    <div className='order-card-right-button'>
                        <button className='order-card-right-button-1'>Order</button>
                    </div>
            </div>
        </div>
    </div>

  )
}

export default OrderCard