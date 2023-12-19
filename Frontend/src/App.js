import React, { Fragment } from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import OrderHistory from './pages/order_history/order_history';
/* Add HomePage element here by importing
  ex- import HomePage from './home/HomePage';
*/
function App() {
  return (
    <Fragment>
        <Router>
          <Routes>
            
          <Route path="/order-history" element={< OrderHistory/>} />
          
          </Routes>
        </Router>
    </Fragment>
  )
}

export default App;