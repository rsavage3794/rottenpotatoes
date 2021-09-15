import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
const multer = require('multer')
// const upload = multer({dest:'uploads/'})


const View = ({match}) => {
    const [showsData, setShowsData] = useState([])
    const url = `http://localhost:8000/api/rotten_potatoes/${match.params.id}`
    useEffect(() => {
        console.log(match)
      fetch(url).then(res => res.json()).then(data => {
          console.log(data)
        setShowsData(data)
      })
    }, [])
    return (
        <div>
                <h3>{showsData.photo_url}</h3>
                <h3>Title: {showsData.title}</h3>
                <h3>Genre: {showsData.genre}</h3>
                <h3>Network: {showsData.network}</h3>
                <h3>Notable Actors: {showsData.notable_actors}</h3>
                <h3>Plot Summary: {showsData.summary}</h3>
                <h3>Your Rating (out of 10): {showsData.rating}</h3>
        </div>
    )
}

export default View
