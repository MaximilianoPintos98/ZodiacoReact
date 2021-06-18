import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Detail } from './components/Detail/Detail'

import { Home } from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/detail/:id' component={Detail}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App