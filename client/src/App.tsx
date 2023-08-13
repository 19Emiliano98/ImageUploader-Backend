import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <form action="/profile" method="post" encType="multipart/form-data">
        <input type='file'>Choose a file</input>
      </form>
    </Fragment>
  );
}

export default App;