import { useState } from 'react'
import Desktop from './Desktop.jsx';
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Desktop /></div>
    </>
  )
}

export default App
