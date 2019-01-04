import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BecomeAHost from './pages/becomeahost'
import SignIn from './pages/login'
import SignUp from './pages/signup'
import Help from './pages/help'

const Router = () => (
    <Switch>
        <Route  exact path='/' component={BecomeAHost} />
        <Route  path='/help' component={Help} />
        <Route  path='/signup' component={SignUp} />
        <Route  path='/login' component={SignIn} />
    </Switch>
)

export default Router;