import React, { Fragment } from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import HomePage from './home/HomePage';
import Home from './pages/homepage/home';
import Login from './pages/login/Login';
import Createparty from './pages/create_party/create_party';
import JoinParty from './pages/join_party/join_party';
import Party from './pages/party_page/party_page';
import Register from './pages/register/register';

function App() {
  return (
    <Fragment>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home/create-party" element={<Createparty/>} />
          <Route path="/home/join-party" element={<JoinParty/>} />
          <Route path="/home/party" element={<Party/>} />
          <Route path="/register" element={<Register/>} />
          </Routes>
        </Router>
    </Fragment>
  )
}

export default App;