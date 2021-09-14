import logo from './logo.svg';
import './App.css';
import { useEffect, useState, Link } from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom'
import View from './components/View/View';

function App() {
  const [showsData, setShowsData] = useState([])
  const url = "http://localhost:8000/api/rotten_potatoes/?format=json"
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setShowsData(data)
    })
  }, [])
  return (
    <div>
    <NavBar />
      <nav>
        <Link to="/shows/:id"></Link>
      </nav>
      <main>
        <Route exact path="/shows/:id" render={routerProps => (
          <View showsData={showsData} match={routerProps.match} title = {title} />
        )}></Route>
      </main>
    </div>
  );
}

export default App;