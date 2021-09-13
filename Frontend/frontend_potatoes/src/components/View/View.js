import React from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Show from '../Show/Show'
const multer = require('multer')


const View = () => {
    const [showsData, setShowsData] = useState([])
    const url = "http://localhost:8000/api/rotten_potatoes/?format=json"
    useEffect(() => {
      fetch(url).then(res => res.json()).then(data => {
        setShowsData(data)
      })
    }, [])
    return (
    <Router>
        <div>
            <nav>
                <Link to="/shows/:id">
                <h2>{show.title}</h2>
                </Link>
            </nav>
            <main>
                <Route exact path="/shows/:id" component={Show}  />
            </main>
        </div>
    </Router>
    )
}

export default View
