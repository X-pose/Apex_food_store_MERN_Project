import React, { Fragment } from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
/* Add HomePage element here by importing
  ex- import HomePage from './home/HomePage';
*/
function App() {
  return (
    <Fragment>
        <Router>
          <Routes>
            
          <Route path="/" element={<HomePage/>} />
          
          </Routes>
        </Router>
    </Fragment>
  )
}

export default App;