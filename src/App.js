import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import {  Layout, Typography,  Space } from 'antd';
import { Navbar, Homepage, Exchanges,Cryptocurrencies,CryptoDetails,News }from './components';

import './App.js';


const App = () => {
  return (
    <div classname = "app">
      <div classname = "navbar">
      < Navbar />
      </div>
      <div classname = "main">
      <Switch>
      <Route exact path = "/">
         < Homepage />
        </Route>
        <Route exact path = "/exchanges">
          <Exchanges />
        </Route>
        <Route exact path = "/cryptocurrencies">
         <Cryptocurrencies />
        </Route>
        <Route exact path = "/crypto/:coinId">
          <CryptoDetails />
        </Route>
        <Route exact path = "/news">
          <News />
        </Route>
      </Switch>

      </div>
      <div classname = "footer">
        <Typography.Title level ={5} style = { { color:'white', textAlign: "center" }}>
          Cryptoverse <br />

          All rights reserved 
        </Typography.Title>
        <Space>
          <Link to ="/">
            Home
          </Link>
          <Link to ="/exchanges">
            Exchanges
          </Link>
          <Link to ="/news">
            News
          </Link>
        </Space>
      </div>
    </div>
  )
}

export default App