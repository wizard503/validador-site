const ENDPOINT = "https://api-diplomas-git-main-miltonmg.vercel.app/diplomas/";

export const getDiploma = async (dui) => {
  try {
    const res = await fetch(ENDPOINT + dui);

    console.log('Headers:', res.headers);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching diploma:', error);
    throw error;
  }
};