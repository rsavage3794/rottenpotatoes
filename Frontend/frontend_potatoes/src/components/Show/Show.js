import React from 'react'
import { useEffect, useState } from 'react';
import './Show.css'

const List = () => {
    const [showsData, setShowsData] = useState([])
    const url = "http://localhost:8000/api/rotten_potatoes/?format=json"
    useEffect(() => {
      fetch(url).then(res => res.json()).then(data => {
        setShowsData(data)
      })
    }, [])
    return (
        <div>
            <ul>
            {showsData.map(item => {
                return (<li>{item.title}</li>)
            })}
    </ul>
        </div>
    )
}

export default List
