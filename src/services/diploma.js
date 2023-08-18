const ENDPOINT = "https://diplomas.onrender.com/diplomas/";

export const getDiploma = async (dui) => {
  const res = await fetch(ENDPOINT+dui);
  const data = await res.json();
  return data.diploma;
};
