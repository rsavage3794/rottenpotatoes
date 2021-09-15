import React from 'react';
import { useState } from 'react';
import HomePage from '../HomePage/HomePage';
import List from '../Show/Show';
import './NavBar.css'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import View from '../View/View';
import Add from '../AddShow/AddShow'

const NavBar = () => {
    return (
    <Router>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shows">Your Shows</Link>
            </nav>
            <main>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shows" component={List} />
                <Route exact path="/shows/add" component={Add} />
                <Route 
                    exact path="/shows/:id" 
                    render={routerProps => (
                    <View match={routerProps.match} />
                )}/>
            {/* <Route exact path="/movies" render={ () => < Home movies={movies}/>} />
            <Route exact path="/movies:episode_number" render={ routerProps => <Movie match={routerProps.match} movies={movies}/>} /> */}
            </main>
        </div>
    </Router>
    );
}

export default NavBar