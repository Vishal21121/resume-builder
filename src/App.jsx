import { useState } from 'react'
import './App.css'
import WorkExperience from './components/WorkExperience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WorkExperience/>
    </>
  )
}

export default App
