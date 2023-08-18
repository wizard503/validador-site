import logo from "../assets/logo.png"

export function Header ({course}) {
  return (
    <>
      <img src={logo} alt="Logo de Torogoz Club de Software Libre" className="logo"/>
      <h1>CURSO</h1>
      <span className="course-name">{course}</span>
    </>
  )
}