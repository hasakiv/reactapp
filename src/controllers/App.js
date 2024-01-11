import React, { useEffect, useState } from "react";


function App() {
  const[value, setValue] = useState(""); 

  const handle = (e) => {
    fetch('http://localhost/phpapp/reactapp.php')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="header-wrapper">
        Header
        </div>
      </header>
      <body>
        <div class="form-group">
          <label for="usr">Name:</label>
          <input type="text" class="form-control" id="usr"/>
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input value={value} onChange={(e) => {setValue(e.target.value)}} />
        </div>
        <button onClick={handle}>Button</button>
        <h2>Message: {value}</h2>
        <h2>Updated: {setValue}</h2>
      </body>
    </div>
  );
}

export default App;