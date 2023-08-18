import logo from "../assets/logo.png"

export function Header () {
  return (
    <>
      <img src={logo} alt="Logo de Torogoz Club de Software Libre" className="logo"/>
      <h1>CURSO</h1>
      <spam className="course-name">Introducción a Linux</spam>
    </>
  )
}