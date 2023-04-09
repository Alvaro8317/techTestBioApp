const urlRailway =
  'https://mylou-production.up.railway.app/bioAppApi/registers/all/22051237';
const getData = async (urlAPI = urlRailway) => {
  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    console.log(data)
  } catch (e) {
    console.error('Unexpected error, details: ', e);
  }
};

getData()