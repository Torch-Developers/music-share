import React from 'react'
import { Route, Switch } from "react-router"
import { BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
