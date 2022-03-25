import React, { useState, useEffect} from 'react'
import './App.css'
import Starship from './services/sw-api.js'

function App() {
const [ships, setships] = useState([])
  useEffect(() => {
    Starship()
    .then((res) => setships(res.results))
  }, [])
    return (
      <html>
        <h1>Starships of the Star Wars Universe</h1>
  <div className="App">

    {ships.map((ships, i) =>{
      return(
        <div id='display' key = {i}>
        {ships.name}
        </div>

    )})}
        </div>
  </html>
    )}

export default App