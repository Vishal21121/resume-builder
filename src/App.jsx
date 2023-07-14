import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PdfTemplate from './components/PdfTemplate'
import Contact from './pages/Contact'
import Header from './pages/Header'

function App() {
  const [data, setData] = useState({
    name: "",
    pos: "",
    tagLine: "",
    email:"",
    number:"",
    gitId:"",
    LinId:""
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header data={data} setData={setData} />} />
        <Route path='/renderpdf' element={<PdfTemplate data={data} />} />
        <Route path='/contact' element={<Contact data={data} setData={setData} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
