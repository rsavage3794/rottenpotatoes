import React from 'react'
import { useEffect, useState } from 'react';
import './Show.css'
import { Link } from 'react-router-dom'

const List = () => {
    const [showsData, setShowsData] = useState([])
    const url = "http://localhost:8000/api/rotten_potatoes/?format=json"
    useEffect(() => {
      fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        setShowsData(data)
      })
    }, [])
    return (
        <div>
            <ul>
            {showsData.map(item => {
                return (<li key = {item.title}><Link to="/shows/:id">{item.title}</Link></li>)
                
            })}
    </ul>
        </div>
    )
}

export default List
