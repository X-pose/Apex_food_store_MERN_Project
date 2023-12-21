import React from 'react'
import './order_history.css'
import Search from '../../assets/search-handle.png'
import OrderCard from '../../components/order_card/order_card'
import FavOrderCard from '../../components/fav_order_card/fav_order_card'
import backgroundImage from '../../assets/Order_History_background.png'

function OrderHistory() {
    return (
        <div className='order-history-con' >
        <div className='order-history' style={{ backgroundImage: `url(${backgroundImage})` }}>
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
                        <div className='order-history-list' style={{ overflowY: 'scroll' }}>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                        </div>
                    </div>
                </div>

                <div className='order-history-body-right'>

                <div className='order-history-body-right-title'>
                        <span id='history-body-right-title'>Your Favorites</span>
                    </div>
                    <div className='order-favorite-list-con'>
                        <div className='order-favorite-list' style={{ overflowY: 'scroll' }}>
                            <FavOrderCard/>
                            <FavOrderCard/>
                            <FavOrderCard/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default OrderHistory