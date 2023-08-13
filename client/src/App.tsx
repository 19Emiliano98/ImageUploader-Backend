//import React from 'react'

function App() {
  
  function handleSubmit( e:any ):any {
    e.preventDefault();

    fetch('http://localhost:8080/principal')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log('error al subir imagen ' + err)
      );

    console.log('You clicked submit.');
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="avatar" />
        
        <button type="submit" value="Submit">send</button>
      </form>
    </>
  )
}

export default App
