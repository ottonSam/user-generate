import { Box, Button, Typography } from "@mui/material";

interface IShowUsersProps {
  usersData: JSON[];
  setShowForm: (e: any) => void;
}

const ShowUsers = ({ usersData, setShowForm }: IShowUsersProps) => {
  const users = <pre>{JSON.stringify(usersData, null, 2)}</pre>;

  const handleReset = () => {
    setShowForm(true);
  };

  const copyUsers = async () => {
    await navigator.clipboard.writeText(JSON.stringify(usersData, null, 2));
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" marginBottom={1}>
        🎉Parabéns os usuários foram criados com sucesso🎉
      </Typography>
      <Button
        sx={{
          marginTop: 2,
          alignSelf: "flex-end",
          borderRadius: 4,
          boxShadow: 3,
        }}
        variant="outlined"
        size="small"
        onClick={copyUsers}
      >
        Copiar
      </Button>
      {users}
      <Button
        sx={{
          maxWidth: 300,
          alignSelf: "center",
        }}
        color="success"
        variant="contained"
        onClick={handleReset}
      >
        Voltar ao formulário
      </Button>
    </Box>
  );
};
export default ShowUsers;
