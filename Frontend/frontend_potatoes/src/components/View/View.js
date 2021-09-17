import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { UpdateShow } from '../UpdateShow/UpdateShow'
const multer = require('multer')
// const upload = multer({dest:'uploads/'})


const View = ({match}) => {
    const [showsData, setShowsData] = useState([])
    const url = `http://localhost:8000/shows/${match.params.id}`
    useEffect(() => {
        console.log(match)
      fetch(url).then(res => res.json()).then(data => {
          console.log(data)
        setShowsData(data)
      })
    }, [])
    return (
        <div>
                <img src={showsData.data.illustration.photo_url} alt={showsData.photo_url} />
                <h3>Title: {showsData.title}</h3>
                <h3>Genre: {showsData.genre}</h3>
                <h3>Network: {showsData.network}</h3>
                <h3>Notable Actors: {showsData.notable_actors}</h3>
                <h3>Plot Summary: {showsData.summary}</h3>
                <h3>Your Rating (out of 10): {showsData.rating}</h3>
                <nav>
                  <Link to={`shows/${showsData.id}/edit`}>Edit</Link>
                  <Link to={`shows/${showsData.id}/delete`}>Delete</Link>
                </nav>
                <main>
                  <Route exact path="/shows/:id/edit" component={UpdateShow} />
                  {/* <Route exact path="/shows/:id/delete" component= /> */}
                </main>
        </div>
    )
}

export default View
