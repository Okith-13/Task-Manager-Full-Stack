import { useState, useEffect } from 'react'
import './App.css'
const API = "/api";

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <p>Backend Status: {message || 'Connecting...'}</p>
    </div>
  )
}

export default App
