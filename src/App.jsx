

import { useDiploma } from './hooks/useDiploma.js'
import './App.css'
import { CourseSections } from "./components/CourseSections.jsx"
import { Header } from './components/Header'
import { Info } from './components/Info'

function App() {
  const diploma = useDiploma()
  return (
    <>
      {diploma && <Header course={diploma.curso}/>}
      {diploma && <Info name={diploma.nombre}/>}
      {diploma && <CourseSections sections={diploma.unidades}/>}
    </>
  )
}

export default App
