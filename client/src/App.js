import React from 'react'
import { Route, Switch } from "react-router"

import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
