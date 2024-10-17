import  React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import InitPage from './Pages/InitPage'
import Random from './Componentes/Random'




function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<InitPage/>}/>
      <Route path='/inicio/home' element={<HomePage/>}/>
      <Route path='/random' element={<Random/>}/>
    </Routes>
      
    </>
  )
}


export default App
