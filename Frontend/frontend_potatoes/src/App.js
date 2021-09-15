import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import View from './components/View/View';
import HomePage from './components/HomePage/HomePage';
import Show from './components/Show/Show'

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
      {/* <nav>
        <Link to="/shows"></Link>
        <Link to="/shows/:id"></Link>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shows" component={Show} />
        <Route 
          exact path="/shows/:id" 
          render={routerProps => (
          <View setShowsData={setShowsData} match={routerProps.match} showsData = {showsData} />
        )}/>
      </Switch> */}
    </div>
  );
}

export default App;