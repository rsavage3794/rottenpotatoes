import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Show from '../Show/Show'
const multer = require('multer')


const View = () => {
    const [showsData, setShowsData] = useState([])
    const url = "http://localhost:8000/api/rotten_potatoes/shows/1"
    useEffect(() => {
        console.log('render')
      fetch(url).then(res => res.json()).then(data => {
          console.log(data)
        setShowsData(data)
      })
    }, [])
    return (
    <Router>
        <div>
            <nav>
                {/* <Link to="/shows/:id">
                <h2>{showsData.photo_url}</h2>
                <h2>{showsData.title}</h2>
                <h2>{showsData.genre}</h2>
                <h2>{showsData.network}</h2>
                <h2>{showsData.notable_actors}</h2>
                <h2>{showsData.summary}</h2>
                <h2>{showsData.rating}</h2>
                </Link> */}
            </nav>
            {/* <main>
                <Route exact path="/shows/:id" component={Show}  />
            </main> */}
        </div>
    </Router>
    )
}

export default View
