import { useState } from 'react';

const API:string = 'http://localhost:8080/upload';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameImage, setNameImage] = useState('');

  const handleImageChange = (event:any) => {
    const imageFile = event.target.files[0];
    
    setSelectedImage(imageFile);
    setNameImage(imageFile.name)
  };

  const handleUpload = (e:any) => {
    e.preventDefault();
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage, nameImage);
      
      //? Aquí puedes realizar la llamada a la API para subir la imagen
      //? usando fetch u otra librería de manejo de peticiones HTTP.
      //? Por ejemplo:

      fetch( API, {
        method: 'POST',
        body: formData.get('image')
      })
      .then(response => response.json())
      .then(data => {
        console.log('Imagen subida con éxito', data)
        console.log(formData.get('image'));
        
      })
      .catch(error => {
        console.error('Error al subir la imagen', error)
      })
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Subir imagen</button>
    </div>
  );
}

export default App;