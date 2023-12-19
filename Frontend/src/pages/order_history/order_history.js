import React from 'react'
import './order_history.css'
import Search from '../../assets/search-handle.png'

function OrderHistory() {
  return (
    <div className='order-history-con'>
        <div className='order-history'>
            <div className='order-history-title'>
                <span id='history-title'>Order History</span>
            </div>
            <div className='order-history-body'>

                <div className='order-history-body-left'>
                    <div className='order-history-body-left-title'>
                        <span id='history-body-left-title'>Your Orders</span>
                    </div>
                    <div className='order-history-search-con'>
                        <form id="order-history-search">
                            <input type="text" placeholder="Search by Order" />
                        </form>
                    </div>
                    <div className='order-history-list-con'>
                        <div className='order-history-list'>

                        </div>
                    </div>
                </div>

                <div className='order-history-body-right'>

                <div className='order-history-body-right-title'>
                        <span id='history-body-right-title'>Your Favorites</span>
                    </div>
                    <div className='order-favorite-list-con'>
                        <div className='order-favorite-list'>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default OrderHistory