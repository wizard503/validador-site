
export function CourseSections ({sections}) {
  return (

    <ol className="list">
        {
        sections.map((item, index) => (
          <li className="item" key={index}>
            <h3 className="headline">{item}</h3>
          </li>
        ))
      }
    </ol>
  )
}