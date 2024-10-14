import  React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import InitPage from './Pages/InitPage'




function App() {


  return (
    <>
    <Routes>
      <Route path='/inicio' element={<InitPage/>}/>
      <Route path='/inicio/home' element={<HomePage/>}/>
    </Routes>
      
    </>
  )
}


export default App
