import React from 'react'
import potato from '../../rotten_potato.png'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <h1>Rotten Potatoes</h1>
            <img src={potato} class="logo" alt="Rotten Potatoes Logo" />
        </div>
    )
}

export default HomePage