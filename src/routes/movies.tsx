const Movies = () => {
  const url = `https://api.themoviedb.org/3/account/${import.meta.env.VITE_TMDB_API_KEY}/lists`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  async function fetchData() {
    try {
      const response = await fetch(url, options);
      console.log('response', response);

      if (!response.ok) {
        throw new Error(`Error HTTP! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Datos protegidos:', data);
    } catch (error) {
      console.error('Error al realizar el fetch:', error);
    }
  }

  fetchData();

  return <div>M</div>;
};

export default Movies;
