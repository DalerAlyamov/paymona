import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import DataManagement from './pages/DataManagement'
import Services from './pages/Services'
import BI from './pages/BI'
import ML from './pages/ML'
import DataScience from './pages/DataScience'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/data-science'>
          <DataScience />
        </Route>
        <Route path='/ml'>
          <ML />
        </Route>
        <Route path='/bi'>
          <BI />
        </Route>
        <Route path='/data-management'>
          <DataManagement />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
