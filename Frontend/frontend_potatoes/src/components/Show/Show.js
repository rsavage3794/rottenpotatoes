import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import './Show.css'
import { Link, Route } from 'react-router-dom'
import View from '../View/View';
import { UpdateShow } from '../UpdateShow/UpdateShow';

const List = () => {
    const [showsData, setShowsData] = useState([])
    const url = "http://localhost:8000/api/rotten_potatoes/"
    useEffect(() => {
      axios.get(url).then(res => {
        console.log(res.data);
        setShowsData(res.data)
      })
      // fetch(url, {headers:{'Access-Control-Allow-Origin':'*'}}).then(res => res.json()).then(data => {
      //   console.log(data)
      //   setShowsData(data)
      // })
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
             <Route exact path="/shows/:id/edit" component={UpdateShow} />
          </main>
      </div>
    )
}

export default List
