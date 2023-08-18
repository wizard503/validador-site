const ENDPOINT = "https://diplomas.onrender.com/diplomas/0203047";

export const getDiploma = async () => {
  const res = await fetch(ENDPOINT);
  const data = await res.json();
  return data.diploma;
};
