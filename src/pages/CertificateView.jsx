import { useLoaderData } from "react-router-dom";

import { getDiploma } from "../services/diploma.js"
import './CertificateView.css'
import { CourseSections } from "../components/CourseSections.jsx"
import { Header } from '../components/Header'
import { Info } from '../components/Info'
import { useNavigate } from "react-router-dom";

export async function loader({ params }) {
  return await getDiploma(params.dui);
}


function CertificateView() {
    const {diploma, msg} = useLoaderData();
    let navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/`, { replace: true });
      };
    return (
    <>
      {diploma && diploma ?
      <>
        <button style={{marginTop: 20+ 'px'}} onClick={handleSearch}>Regresar a Home</button>
        <Header course={diploma.curso}/>
        <Info name={diploma.nombre}/>
        <CourseSections sections={diploma.unidades}/>
      </>
      :
      <>
        <h1>{msg}</h1>
        <button onClick={handleSearch}>Regresar a Home</button>
      </>
      }
    </>
  )
}

export default CertificateView;
