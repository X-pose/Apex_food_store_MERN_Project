import React, { Fragment } from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import OrderHistory from './pages/order_history/order_history';
import OrderCard from './components/order_card/order_card';
<<<<<<< HEAD

import Feedback from './pages/feedback/feedback';
import Navbar from './components/Header/Navbar';


=======
import HomePage from './pages/homePagw/homePage';
>>>>>>> 3884d4d3 (fix)
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
          <Route path="/order-card" element={<OrderCard/>} />
<<<<<<< HEAD
          
          <Route path = "/feedback" element = {<Feedback/>}/>

=======
          <Route path="/Home" element={<HomePage/>} />
>>>>>>> 3884d4d3 (fix)
          </Routes>
        </Router>
    </Fragment>
  )
}

export default App;