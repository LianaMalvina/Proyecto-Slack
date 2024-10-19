import  React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import InitPage from './Pages/InitPage'
import Random from './Componentes/RandomRedireccion/Random'
import CrearNuevoCanal from './Componentes/Canales/CrearNuevoCanal'
import Canales from './Componentes/Canales/Canales'
import ChatItem from './Componentes/ChatPrincipal/ChatItem'
import ChatList from './Componentes/ChatPrincipal/ChatList'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<InitPage/>}/>
      <Route path='/inicio/home' element={<HomePage/>}/>
      <Route path='/random' element={<Random/>}/>
      <Route path='/new' element={<CrearNuevoCanal/>}/>
      <Route path='/inicio/new' element={<CrearNuevoCanal/>}/>
      <Route path="/canales" element={<Canales/>} />
     {/* <Route path="/chat/:canalId" element={<ChatItem/>} />
      <Route path='/inicio/home/chat/:canalId' element={<ChatList />} />*/}
    </Routes>
      
    </>
  )
}


export default App
