import { useEffect, useState } from "react";
import { getDiploma } from "../services/diploma.js"

export function useDiploma() {

  const [diploma, setDiploma] = useState();

  // para recuperar la cita al cargar la página
  useEffect(() => {
    getDiploma().then((newDiploma) => setDiploma(newDiploma));
  }, []);

  return diploma;
}
