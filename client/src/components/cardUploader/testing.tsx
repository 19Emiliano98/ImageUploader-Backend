import { useState, useEffect } from 'react';

function App() {
  const [latestImage, setLatestImage] = useState('');

  useEffect(() => {
    // Hacer una solicitud a tu API para obtener la URL de la última imagen subida
    fetch('http://localhost:8080/upload')
      .then((response) => response.json())
      .then((data) => {
        // data debería contener la URL de la última imagen subida
        setLatestImage(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching latest image:', error);
      });
  }, []);

  return (
    <div>
      <h1>Última Imagen Subida:</h1>
      {latestImage && <img src={latestImage} alt="Última Imagen Subida" />}
    </div>
  );
}

export default App;
