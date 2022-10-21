import { useEffect, useState } from "react";

function App() {
  const [characters, setcharacters] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character";

  // const getCharacters = async (url) => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  //   };
  const getCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setcharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  return (
    <div className="mt-5 container">
      <h3>Hola</h3>
    </div>
  );
}

export default App;
