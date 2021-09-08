import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'

const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
