import { useLoaderData } from "react-router-dom";

import { getDiploma } from "./services/diploma.js"
import './App.css'
import { CourseSections } from "./components/CourseSections.jsx"
import { Header } from './components/Header'
import { Info } from './components/Info'


export async function loader({ params }) {
  return await getDiploma(params.dui);
}

function App() {
  const diploma = useLoaderData();
  return (
    <>
      {diploma && <Header course={diploma.curso}/>}
      {diploma && <Info name={diploma.nombre}/>}
      {diploma && <CourseSections sections={diploma.unidades}/>}
    </>
  )
}

export default App
