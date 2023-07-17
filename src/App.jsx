import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Header from './pages/Header'
import Skill from './pages/Skill'
import Work from './pages/Work'
import PdfView from './pages/PdfView'
import Education from './pages/Education'

function App() {
  const [data, setData] = useState({
    name: "",
    pos: "",
    tagLine: "",
    email: "",
    number: "",
    gitId: "",
    LinId: "",
    skill: [],
    position: "",
    company: "",
    duration: "",
    degree: "",
    university: "",
    edduration: ""
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header data={data} setData={setData} />} />
        <Route path='/renderpdf' element={<PdfView data={data} />} />
        <Route path='/contact' element={<Contact data={data} setData={setData} />} />
        <Route path='/skill' element={<Skill data={data} setData={setData} />} />
        <Route path='/work' element={<Work data={data} setData={setData} />} />
        <Route path='/edu' element={<Education data={data} setData={setData} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
