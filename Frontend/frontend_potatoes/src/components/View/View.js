import React from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

const View = () => {
    return (
<Router>
        <div>
            <nav>
                <Link to="/shows/:id">Your Shows</Link>
            </nav>
            <main>
                <Route exact path="/shows/:id"  />
            {/* <Route exact path="/movies" render={ () => < Home movies={movies}/>} />
            <Route exact path="/movies:episode_number" render={ routerProps => <Movie match={routerProps.match} movies={movies}/>} /> */}
            </main>
        </div>
    </Router>
    )
}

export default View
