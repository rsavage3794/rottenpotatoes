import logo from './logo.svg';
import './App.css';
import { useEffect, useState, Link } from 'react';
import NavBar from './components/NavBar/NavBar';

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
    {/* <ul>
    {showsData.map(item => {
      return (<li>{item.title}</li>)
    })}
    </ul> */}
    </div>
  );
}

export default App;