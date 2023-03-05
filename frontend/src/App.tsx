import React from "react";
import axios from "axios";

function App() {
  const handleSubmit = async () => {
    console.log("submit");
    const data = await axios({
      method: "post",
      url: "http://localhost:3333/generate",
      data: {
        numero_usuarios: 2,
        campos: ["nome", "sexo", "pai", "mãe"],
      },
    });

    console.log(data);
  };
  return (
    <div className="App">
      <h1>hot reload</h1>
      <button type="button" onClick={() => handleSubmit()}>
        click
      </button>
    </div>
  );
}

export default App;
