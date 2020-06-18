import React from 'react';
import {BrowserRouter,Redirect,Route, Switch} from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';


import Home from '../Home/index'

import Hotels from '../hotels/HomePages'
import SearchHotels from '../hotels/SearchHotels'
import HotelPage from '../hotels/HotelPage'
import HotelPayments from '../hotels/Payments'

import flight from '../flight/HomePage'
import flightResult from '../flight/SearchResult'
import flightPayment from '../flight/Payments'

import Cars from '../cars/HomePage'
import SearchCar from '../cars/SearchCar'
import CarPayment from '../cars/Payment'

import Experience from '../explore/HomePage'
import SearchExp from '../explore/SearchExp'
import ExpPage from '../explore/Exp'
import ExpPayment from '../explore/Payment'

function App() {
  return (
   <>

        {/* <menu /> */}
        <Switch>
    
    <Route exact path="/" component={Home}/>

    <Route  path="/hotels" component={Hotels}/>
    <Route  path="/SearchHotels" component={SearchHotels}/>
    <Route  path="/HotelPage" component={HotelPage}/>
    <Route  path="/HotelPayment" component={HotelPayments}/>

    <Route  path="/flight" component={flight}/>
    <Route  path="/flightResult" component={flightResult}/>
    <Route  path="/flightPayment" component={flightPayment}/>

    <Route  path="/Cars" component={Cars}/>
    <Route  path="/SearchCar" component={SearchCar}/>
    <Route  path="/CarPayment" component={CarPayment}/>

    <Route  path="/Experience" component={Experience}/>
    <Route  path="/SearchExp" component={SearchExp}/>
    <Route  path="/ExpPage" component={ExpPage}/>
    <Route  path="/ExpPayment" component={ExpPayment}/>



  </Switch>
  {/* </BrowserRouter> */}
  </>
     
  );
}

export default App;
