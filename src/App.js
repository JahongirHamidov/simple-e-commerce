import React from 'react'
import {Dashboard} from './Components/Dashboard/Dashboard'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import {MyCart} from './Components/MyCart/MyCart'
import {InfoCard} from './Components/InfoCard/InfoCard'
import {AddCard} from './Components/AddCard/AddCard'
import {MyAppBar} from './Components/MyAppBar/MyAppBar'
import {Provider} from './globalState'

export default function App() {

  return (
    <>
    <Provider>  
    <BrowserRouter>
      <MyAppBar/>
      <Switch>
          <Route path='/' exact>
            <Dashboard />
          </Route>
          <Route path='/addCard'>
            <AddCard />
          </Route>
          <Route path='/myCart'>
            <MyCart />
          </Route>
          <Route path='/cardInfo'>
            <InfoCard />
          </Route>
      </Switch>
    </BrowserRouter>
    </Provider>
  </>
  )
}

