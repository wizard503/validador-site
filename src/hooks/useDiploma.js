const ENDPOINT = "https://api-diplomas.vercel.app/diplomas/";

export const getDiploma = async (dui) => {
  try {
    const res = await fetch(ENDPOINT + dui);

    // Muestra los encabezados de respuesta en la consola
    console.log('Headers:', res.headers);

    const data = await res.json();
    return data.diploma;
  } catch (error) {
    console.error('Error fetching diploma:', error);
    throw error; // Propaga el error para que pueda ser manejado en el código que llama a esta función
  }
};
