import { useState } from "react";
import ShowUsers from "./components/ShowUsers";
import Form from "./components/UserGenerateForm";

function App() {
  const userExample: any[] = [];
  const [showForm, setShowForm] = useState(true);
  const [dataUsers, setDataUsers] = useState(userExample);

  return (
    <div className="App">
      {showForm ? (
        <Form setShowForm={setShowForm} setDataUsers={setDataUsers} />
      ) : (
        <ShowUsers usersData={dataUsers} />
      )}
    </div>
  );
}

export default App;
