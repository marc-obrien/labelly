import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './core/components/Home';
import Ship from './core/components/Ship';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker'
const routes = () => (
   
    <App>
        <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Ship" component={Ship} />
        </Switch>
    </App> )

export default routes
