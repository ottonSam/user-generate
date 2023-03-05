import { Box } from "@mui/material";
import { useState } from "react";
import ShowUsers from "./components/ShowUsers";
import Form from "./components/UserGenerateForm";

function App() {
  const userExample: any[] = [];
  const [showForm, setShowForm] = useState(true);
  const [dataUsers, setDataUsers] = useState(userExample);

  return (
    <Box
      padding={4}
      maxWidth={720}
      margin="auto"
      marginTop={4}
      borderRadius={4}
      boxShadow={6}
    >
      {showForm ? (
        <Form setShowForm={setShowForm} setDataUsers={setDataUsers} />
      ) : (
        <ShowUsers setShowForm={setShowForm} usersData={dataUsers} />
      )}
    </Box>
  );
}

export default App;
