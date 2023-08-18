import { useEffect, useState } from "react";
import { getDiploma } from "../services/diploma.js"

export function useDiploma({dui}) {

  const [diploma, setDiploma] = useState();

  useEffect(() => {
    getDiploma({dui}).then((newDiploma) => setDiploma(newDiploma));
  }, []);

  return diploma;
}
