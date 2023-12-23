import React, { Fragment } from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import OrderHistory from './pages/order_history/order_history';
import OrderCard from './components/order_card/order_card';
import Navbar from './components/Header/Navbar';
/* Add HomePage element here by importing
  ex- import HomePage from './home/HomePage';
*/
function App() {
  return (
    <Fragment>
      <Navbar/>
        <Router>
          <Routes>
            
          <Route path="/order-history" element={<OrderHistory/>} />
          
          </Routes>
        </Router>
    </Fragment>
  )
}

export default App;