import React from 'react'
import {Route, Switch,BrowserRouter as Router} from "react-router-dom"
import About from '../About'
import Header from '../header'
const Routes = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/note" component={About}/>
            </Switch>
        </Router>
    </div>
  )
}

export default Routes