import React from 'react'
import { useEffect, useState } from 'react';
import './Show.css'
import { Link, Route } from 'react-router-dom'
import View from '../View/View';

const List = () => {
    const [showsData, setShowsData] = useState([])
    const url = "http://localhost:8000/api/rotten_potatoes/"
    useEffect(() => {
      fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        setShowsData(data)
      })
    }, [])
    return (
      <div>
         {/* <nav>
             <Link to={"/shows/"+ item.id}>
             </Link>
         </nav> */}
            <ul>
            {showsData.map(item => {
              return (<li key = {item.title}>
                <Link to={`/shows/${item.id}`}>{item.title}</Link></li>) 
            })}
            </ul>
          <main>
             <Route exact path="/shows/:id" component={View} />
          </main>
      </div>
    )
}

export default List
